import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { Container, Box, Stack, Center, Text } from '@mantine/core'
import InfiniteScroll from 'react-infinite-scroll-component'

import { Heading } from '@/components/Element/Heading'
import { Loader } from '@/components/Element/Loader'

import { formatDate } from '@/utils/format'
import { sleep } from '@/utils/sleep'
import { BlogContent } from '@/types'

import { useStyles } from '@/styles/object/pages/blog'

type Props = {
  contents: BlogContent['contents']
  totalCount: number
}

const limit = 10

export const Blog: React.FC<Props> = ({ contents, totalCount }) => {
  const { classes } = useStyles()
  const [pageNumber, setPageNumber] = useState(1)
  const [items, setItems] = useState<BlogContent['contents']>(contents)

  const isFetchAll = useMemo(() => {
    return totalCount > items.length || totalCount !== items.length
  }, [totalCount, items])

  const fetchData = async () => {
    await sleep(500)
    const { data } = await axios.get<BlogContent>('/api/blog/list', {
      params: {
        offset: pageNumber * limit,
      },
    })

    setItems([...items, ...data.contents])
    setPageNumber(pageNumber + 1)
  }

  return (
    <Container size="lg" py={40}>
      <Box mb={24}>
        <Heading order={1}>Blog</Heading>
      </Box>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        loader={
          <Center mt={16}>
            <Loader />
          </Center>
        }
        hasMore={isFetchAll}
      >
        <Stack mb={24}>
          {items.map((x) => (
            <Link key={x.id} href={`/blog/${x.id}`} passHref>
              <a>
                <Text className={classes.title}>{x.title}</Text>
                <Text className={classes.description} lineClamp={1}>
                  {x.description}
                </Text>
                <Text className={classes.date}>
                  <time dateTime={formatDate(x.publishedAt)}>
                    {formatDate(x.publishedAt)}
                  </time>
                </Text>
              </a>
            </Link>
          ))}
        </Stack>
      </InfiniteScroll>
    </Container>
  )
}
