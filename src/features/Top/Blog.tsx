import React from 'react'
import Link from 'next/link'
import { Box, Stack, Center, createStyles } from '@mantine/core'

import { Heading2 } from '@/components/Element/Heading/Heading2'
import { LinkButton } from '@/components/Element/Button/LinkButton'

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    marginBottom: '8px',
    fontSize: '22px',
  },
  description: {
    margin: '0 0 8px',
  },
  date: {
    color: theme.colors.dark[2],
    fontSize: '12px',
    margin: 0,
  },
}))

export const Blog = () => {
  const { classes } = useStyles()

  return (
    <>
      <Box mb={24}>
        <Heading2>Blog</Heading2>
      </Box>
      <Stack mb={24}>
        {[...Array(5).keys()].map((x) => (
          <dl key={x}>
            <dt className={classes.title}>
              <Link href="#" passHref>
                <a className={classes.title}>This is a header</a>
              </Link>
            </dt>
            <dd className={classes.description}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{' '}
            </dd>
            <dd className={classes.date}>2022.07.11</dd>
          </dl>
        ))}
      </Stack>
      <Center>
        <LinkButton href="/blog">View All</LinkButton>
      </Center>
    </>
  )
}
