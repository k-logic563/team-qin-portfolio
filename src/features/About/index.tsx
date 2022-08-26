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
        <Box sx={{ lineHeight: 1.8 }}>
          <Text mb={20}>
            システム開発会社にてフロントエンド業務などしています。
            <br />
            ウェブサイト制作したり、管理画面のコーディングをしたり、ライブラリ作ったり、とりあえず色々手を出してます。
          </Text>
          <Text>
            性格は「慎重」。決して冒険家ではなく石橋を叩いて渡っていくスタイルです。<br />好きな名言は「え、何？とりあえずビール飲む？」です。
          </Text>
        </Box>
      </Box>
    </Container>
  )
}
