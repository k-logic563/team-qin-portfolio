import React from 'react'
import Link from 'next/link'
import { Box, Image, Title, Text, Center } from '@mantine/core'

import { Heading } from '@/components/Element/Heading'
import { LinkButton } from '@/components/Element/Button/LinkButton'

import * as styles from '@/styles'

export const Portfolio = () => {
  const { classes } = styles.portfolio.useStyles()

  return (
    <>
      <Box mb={24}>
        <Heading order={2}>Portfolio</Heading>
      </Box>
      <Box mb={40} className={classes.list}>
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
      <Center>
        <LinkButton href="/portfolio">View All</LinkButton>
      </Center>
    </>
  )
}
