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
          Lightsound Shimabu{' '}
        </Title>
        <Text>
          ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
        </Text>
      </Box>
    </Container>
  )
}
