import React from 'react'
import Link from 'next/link'
import { Stack, Center, Text } from '@mantine/core'

import { LinkButton } from '@/components/Element/Button/LinkButton'

import { BlogContent } from '@/types'
import { formatDate } from '@/utils/format'
import { useFetcher } from '@/hooks/useFetcher'

import * as styles from '@/styles'

export const Blog = () => {
  const { classes } = styles.blog.useStyles()
  const { data, error } = useFetcher<BlogContent>('blog/list?limit=6')

  if (error) throw new Error(error)

  return (
    <>
      <Stack mb={24}>
        {data?.contents.map((x) => (
          <Link key={x.id} href={`/blog/${x.id}`} passHref>
            <a>
              <Text className={classes.title}>{x.title}</Text>
              <Text className={classes.description} lineClamp={1}>{x.description}</Text>
              <Text className={classes.date}>
                <time dateTime={formatDate(x.publishedAt)}>
                  {formatDate(x.publishedAt)}
                </time>
              </Text>
            </a>
          </Link>
        ))}
      </Stack>
      <Center>
        <LinkButton href="/blog">View All</LinkButton>
      </Center>
    </>
  )
}
