import React from 'react'
import { Container, Box, Text } from '@mantine/core'

import { Heading } from '@/components/Element/Heading'

import { useStyles } from '@/styles/object/pages/blog'
import { formatDate } from '@/utils/format'

type Props = {
  title: string
  content: string
  publishedAt: string
}

export const BlogId: React.FC<Props> = ({ title, content, publishedAt }) => {
  const { classes } = useStyles()

  return (
    <Container size="lg" py={40}>
      <Box mb={24}>
        <Box mb={12}>
          <Heading order={1}>{title}</Heading>
        </Box>
        <Text sx={(theme) => ({ color: theme.colors.dark[2] })}>
          {formatDate(publishedAt)}
        </Text>
      </Box>
      <Box
        className={classes.contents}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  )
}
