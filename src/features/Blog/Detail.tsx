import React from 'react'
import { Container, Box } from '@mantine/core'

import { Heading } from '@/components/Element/Heading'

import { useStyles } from '@/styles/object/pages/blog'
import { mockContents } from './mock'

export const Detail = () => {
  const { classes } = useStyles()

  return (
    <Container size="lg" py={40}>
      <Box mb={24}>
        <Heading order={1}>ダミータイトル</Heading>
      </Box>
      <Box
        className={classes.contents}
        dangerouslySetInnerHTML={{ __html: mockContents }}
      />
    </Container>
  )
}
