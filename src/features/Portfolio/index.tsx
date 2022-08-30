import React from 'react'
import { Container, Box, Image, Title, Text } from '@mantine/core'

import { Heading } from '@/components/Element/Heading'

import { PortfolioContent } from '@/types'

import { useStyles } from '@/styles/object/pages/portfolio'

type Props = {
  contents: PortfolioContent['contents']
}

export const Portfolio: React.FC<Props> = ({ contents }) => {
  const { classes } = useStyles()

  return (
    <Container size="lg" py={40}>
      <Box mb={24}>
        <Heading order={1}>Portfolio</Heading>
      </Box>
      <Box className={classes.list}>
        {contents.map((x) => (
          <a key={x.id} href={x.link} target="blank">
            <Image src={x.thumbnail.url} alt="" mb={16} />
            <Title order={3} className={classes.title}>
              {x.title}
            </Title>
            <Text mb={8}>{x.description}</Text>
            <Text className={classes.date}>{x.range_date}</Text>
          </a>
        ))}
      </Box>
    </Container>
  )
}
