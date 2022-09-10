import React, { useMemo } from 'react'
import SimpleBar from 'simplebar-react'
import {
  Box,
  Group,
  Text,
  Center,
  Avatar,
  Stack,
  Anchor,
  Image,
} from '@mantine/core'
import reactStringReplace from 'react-string-replace'

import { LinkButton } from '@/components/Element/Button/LinkButton'

import { useFetcher } from '@/hooks/useFetcher'
import { TwitterTweetProps, TwitterUserProps } from '@/types'
import { formatDate } from '@/utils/format'

import 'simplebar/dist/simplebar.min.css'
import * as styles from '@/styles'

export const Twitter = () => {
  const { classes } = styles.twitter.useStyles()
  const { data: user, error: userError } = useFetcher<{
    data: TwitterUserProps
  }>('twitter/user?user.fields=profile_image_url')
  const { data: tweet, error: tweetError } = useFetcher<TwitterTweetProps>(
    'twitter/tweet?max_results=5&tweet.fields=created_at&user.fields=name,profile_image_url&exclude=replies,retweets&expansions=attachments.media_keys&media.fields=url'
  )

  if (userError) throw new Error(userError)
  if (tweetError) throw new Error(tweetError)

  const formattedTweets = useMemo(() => {
    const newTweets = tweet?.data.map((x) => {
      // メディアがあった場合
      if (x.attachments) {
        const imageUrls = x.attachments.media_keys.map((key) => {
          const targetImage = tweet.includes.media.find(
            (y) => y.media_key === key
          )
          // 画像ならurlを返す
          if (targetImage && targetImage.type === 'photo') {
            return targetImage.url
          }
          return ''
        })
        x.imageUrls = imageUrls
      }
      return x
    })
    return newTweets
  }, [tweet])

  return (
    <>
      <SimpleBar className={classes.wrapper} autoHide={false}>
        <Stack spacing={56} mb={40}>
          {formattedTweets?.map((x, i) => (
            <Box key={i} className={classes.inner}>
              <Avatar src={user?.data.profile_image_url} radius="xl" />
              <Box>
                <Group mb={4}>
                  <Text className={classes.title}>{user?.data.name}</Text>
                  <Text className={classes.date}>
                    @{user?.data.username}・{formatDate(x.created_at, 'M月d日')}
                  </Text>
                </Group>
                <Box sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                  {reactStringReplace(
                    x.text,
                    /(https?:\/\/\S+)/g,
                    (match, i) => (
                      <Anchor
                        sx={{ display: 'block' }}
                        key={i}
                        href={match}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {match}
                      </Anchor>
                    )
                  )}
                  {x.imageUrls && (
                    <Box mt={16} sx={{ display: 'grid', rowGap: '1rem' }}>
                      {x.imageUrls?.map(
                        (url, i) => url && <Image key={i} src={url} alt="" />
                      )}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </SimpleBar>
      <Center>
        <LinkButton href="https://twitter.com/webD_hello21" target="_blank">
          View On Twitter
        </LinkButton>
      </Center>
    </>
  )
}
