import React from 'react'
import Link from 'next/link'
import { Box, Stack, Center, Text } from '@mantine/core'

import { Heading } from '@/components/Element/Heading'
import { LinkButton } from '@/components/Element/Button/LinkButton'

import * as styles from '@/styles'
import { BlogContent } from '@/types'
import { formatDate } from '@/utils/format'

type Props = {
  blogs: BlogContent['contents']
}

export const Blog: React.FC<Props> = ({ blogs }) => {
  const { classes } = styles.blog.useStyles()

  return (
    <>
      <Box mb={24}>
        <Heading order={2}>Blog</Heading>
      </Box>
      {blogs.length !== 0 ? (
        <>
          <Stack mb={24}>
            {blogs.map((x) => (
              <Link key={x.id} href={`/blog/${x.id}`} passHref>
                <a>
                  <dl>
                    <dt className={classes.title}>{x.title}</dt>
                    <dd className={classes.description}>{x.description}</dd>
                    <dd className={classes.date}>
                      <time dateTime={formatDate(x.publishedAt)}>
                        {formatDate(x.publishedAt)}
                      </time>
                    </dd>
                  </dl>
                </a>
              </Link>
            ))}
          </Stack>
          <Center>
            <LinkButton href="/blog">View All</LinkButton>
          </Center>
        </>
      ) : (
        <Text>No Posts.</Text>
      )}
    </>
  )
}
