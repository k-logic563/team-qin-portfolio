import React, { useState } from 'react'
import Link from 'next/link'
import { Container, Box, Stack, Loader as MLoader, Center } from '@mantine/core'
import InfiniteScroll from 'react-infinite-scroll-component'

import { Heading } from '@/components/Element/Heading'

import { useStyles } from '@/styles/object/pages/blog'

const perItems = 10

const Loader = () => {
  return (
    <Center mt={16}>
      <MLoader color="pink" />
    </Center>
  )
}

export const Blog = () => {
  const { classes } = useStyles()
  const [list, setList] = useState([...Array(perItems).keys()].map((_, i) => i))

  const fetchData = () => {
    // ここでデータ取得
    // offsetやらpageクエリで対応したデータをフィルタリングする
    setTimeout(() => {
      const data = [...Array(perItems).keys()].map((_, i) => i)

      setList([...list, ...data])
    }, 1000)
  }

  return (
    <Container size="lg" py={40}>
      <Box mb={24}>
        <Heading order={1}>Blog</Heading>
      </Box>
      <InfiniteScroll
        dataLength={list.length}
        next={fetchData}
        loader={<Loader />}
        hasMore={true}
      >
        <Stack mb={24}>
          {list.map((x) => (
            <Link key={x} href="#" passHref>
              <a>
                <dl>
                  <dt className={classes.title}>This is a header</dt>
                  <dd className={classes.description}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.{' '}
                  </dd>
                  <dd className={classes.date}>2022.07.11</dd>
                </dl>
              </a>
            </Link>
          ))}
        </Stack>
      </InfiniteScroll>
    </Container>
  )
}
