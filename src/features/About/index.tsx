import React from 'react'
import { Container, Box, Title, Text } from '@mantine/core'

import { Heading } from '@/components/Element/Heading'

export const About = () => {
  return (
    <Container size="lg" py={40}>
      <Box mb={24}>
        <Heading order={1}>About</Heading>
      </Box>
      <Box>
        <Title order={2} mb={24}>
          がんちゃん
        </Title>
        <Text sx={{ lineHeight: 1.8 }}>
          システム開発会社にてフロントエンド業務などしています。
          <br />
          好きな名言は「え、何？とりあえずビール飲む？」です。
        </Text>
      </Box>
    </Container>
  )
}
