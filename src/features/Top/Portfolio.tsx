import React from 'react'
import { Box, Image, Title, Text, Center } from '@mantine/core'

import { Heading } from '@/components/Element/Heading'
import { LinkButton } from '@/components/Element/Button/LinkButton'

import { useFetcher } from '@/hooks/useFetcher'
import { PortfolioContent } from '@/types'

import * as styles from '@/styles'

export const Portfolio = () => {
  const { classes } = styles.portfolio.useStyles()
  const { data, error } = useFetcher<PortfolioContent>('portfolio?limit=6')

  if (error) throw new Error(error)

  return (
    <>
      <Box mb={24}>
        <Heading order={2}>Portfolio</Heading>
      </Box>
      <Box mb={40} className={classes.list}>
        {data?.contents.map((x) => (
          <a key={x.id} href={x.link} target="blank">
            <Image src={x.thumbnail.url} alt="" mb={16} />
            <Title order={3} className={classes.title}>
              {x.title}
            </Title>
            <Text mb={8} lineClamp={3}>
              {x.description}
            </Text>
            <Text className={classes.date}>{x.range_date}</Text>
          </a>
        ))}
      </Box>
      <Center>
        <LinkButton href="/portfolio">View All</LinkButton>
      </Center>
    </>
  )
}
