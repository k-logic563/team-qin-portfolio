import React from 'react'
import Link from 'next/link'
import { Container, Box, Image, Title, Text } from '@mantine/core'

import { Heading } from '@/components/Element/Heading'

import { useStyles } from '@/styles/object/pages/portfolio'

export const Portfolio = () => {
  const { classes } = useStyles()

  return (
    <Container size="lg" py={40}>
      <Box mb={24}>
        <Heading order={1}>Portfolio</Heading>
      </Box>
      <Box className={classes.list}>
        {[...Array(6).keys()].map((x) => (
          <Link key={x} href="#" passHref>
            <a>
              <Image src="/assets/Thumbnail.jpg" alt="" mb={16} />
              <Title order={3} className={classes.title}>
                IT KINGDOM
              </Title>
              <Text mb={8}>
                当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
              </Text>
              <Text className={classes.date}>2021.10 - 2021.12</Text>
            </a>
          </Link>
        ))}
      </Box>
    </Container>
  )
}
