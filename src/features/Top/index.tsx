import React from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  Title,
  Text,
  Group,
  Image,
} from '@mantine/core'

import { Blog } from '@/features/Top/Blog'
import { Portfolio } from '@/features/Top/Portfolio'
import { Github } from '@/features/Top/Github'
import { Twitter } from '@/features/Top/Twitter'

import { icons } from '@/constants/page'

import * as styles from '@/styles'
import { BlogContent } from '@/types'

type Props = {
  blogs: BlogContent['contents']
}

export const Top: React.FC<Props> = ({ blogs }) => {
  const { classes } = styles.firstview.useStyles()

  return (
    <>
      <Box className={classes.fv}>
        <Container size="lg" className={classes.fvWrapper}>
          <Box className={classes.fvInner}>
            <Box>
              <Title order={1} className={classes.fvTitle}>
                Shimabu IT University
              </Title>
              <Text className={classes.fvDesc}>
                しまぶーのポートフォリオのためのページです
              </Text>
            </Box>
            <Group>
              {icons.map((icon) => (
                <a key={icon.name} href={icon.href}>
                  <Image src={`/assets/${icon.name}.svg`} alt="" />
                </a>
              ))}
            </Group>
          </Box>
        </Container>
      </Box>
      <Box pt={80} pb={100}>
        <Container size="lg">
          <Blog blogs={blogs} />
        </Container>
      </Box>
      <Container size="lg">
        <Portfolio />
      </Container>
      <Container size="lg" pt={100} pb={60}>
        <SimpleGrid
          spacing={60}
          breakpoints={[
            {
              minWidth: 'sm',
              cols: 2,
              spacing: 80,
            },
          ]}
        >
          <Box>
            <Github />
          </Box>
          <Box>
            <Twitter />
          </Box>
        </SimpleGrid>
      </Container>
    </>
  )
}
