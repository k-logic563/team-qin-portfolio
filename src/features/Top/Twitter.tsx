import React from 'react'
import { Box, Group, Text, Center, Avatar, Stack } from '@mantine/core'

import { LinkButton } from '@/components/Element/Button/LinkButton'

import { useFetcher } from '@/hooks/useFetcher'
import { TwitterTweetProps, TwitterUserProps } from '@/types'
import { formatDate } from '@/utils/format'

import * as styles from '@/styles'

export const Twitter = () => {
  const { classes } = styles.twitter.useStyles()
  const { data: user, error: userError } = useFetcher<{
    data: TwitterUserProps
  }>('twitter/user?user.fields=profile_image_url')
  const { data: tweet, error: tweetError } = useFetcher<{
    data: TwitterTweetProps[]
  }>(
    'twitter/tweet?max_results=5&tweet.fields=created_at&user.fields=name&exclude=replies,retweets'
  )

  if (userError) throw new Error(userError)
  if (tweetError) throw new Error(tweetError)

  return (
    <>
      <Stack spacing={56} mb={40}>
        {tweet?.data.map((x, i) => (
          <Box key={i} className={classes.wrapper}>
            <Avatar src={user?.data.profile_image_url} radius="xl" />
            <Box>
              <Group mb={4}>
                <Text className={classes.title}>{user?.data.name}</Text>
                <Text className={classes.date}>
                  @{user?.data.username}・{formatDate(x.created_at, 'M月d日')}
                </Text>
              </Group>
              <Box style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: x.text }} />
            </Box>
          </Box>
        ))}
      </Stack>
      <Center>
        <LinkButton href="https://twitter.com/webD_hello21" target="_blank">
          View On Twitter
        </LinkButton>
      </Center>
    </>
  )
}
