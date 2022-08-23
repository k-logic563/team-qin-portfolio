import React from 'react'
import { Container, Box } from '@mantine/core'

import { Heading } from '@/components/Element/Heading'

import { useStyles } from '@/styles/object/pages/blog'

type Props = {
  title: string
  content: string
}

export const BlogId: React.FC<Props> = ({ title, content }) => {
  const { classes } = useStyles()

  return (
    <Container size="lg" py={40}>
      <Box mb={24}>
        <Heading order={1}>{title}</Heading>
      </Box>
      <Box
        className={classes.contents}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  )
}
