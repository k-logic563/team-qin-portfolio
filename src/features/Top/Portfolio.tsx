import React from 'react'
import Link from 'next/link'
import { Box, Image, Title, Text, Center, createStyles } from '@mantine/core'

import { Heading2 } from '@/components/Element/Heading/Heading2'
import { LinkButton } from '@/components/Element/Button/LinkButton'

const useStyles = createStyles((theme) => ({
  list: {
    display: 'grid',
    gap: '40px 20px',
    [theme.fn.largerThan('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.fn.largerThan('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  date: {
    color: theme.colors.dark[2],
    fontSize: '12px',
  },
}))

export const Portfolio = () => {
  const { classes } = useStyles()

  return (
    <>
      <Box mb={24}>
        <Heading2>Portfolio</Heading2>
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
