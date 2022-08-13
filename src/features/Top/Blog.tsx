import React from 'react'
import Link from 'next/link'
import { Box, Stack, Center } from '@mantine/core'

import { Heading } from '@/components/Element/Heading'
import { LinkButton } from '@/components/Element/Button/LinkButton'

import * as styles from '@/styles'

export const Blog = () => {
  const { classes } = styles.blog.useStyles()

  return (
    <>
      <Box mb={24}>
        <Heading order={2}>Blog</Heading>
      </Box>
      <Stack mb={24}>
        {[...Array(5).keys()].map((x) => (
          <Link key={x} href="#" passHref>
            <a>
              <dl>
                <dt className={classes.title}>This is a header</dt>
                <dd className={classes.description}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{' '}
                </dd>
                <dd className={classes.date}>2022.07.11</dd>
              </dl>
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
