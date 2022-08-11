import React from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Title,
  Container,
  Group,
  Text,
  Anchor,
  Image,
} from '@mantine/core'

import { icons } from '@/constants/page'

import * as styles from '@/styles'

export const FirstView = () => {
  const { classes } = styles.firstview.useStyles()
  const { pathname } = useRouter()

  return (
    <Box className={classes.fv}>
      <Container size="lg" className={classes.fvWrapper}>
        <Box className={classes.fvInner}>
          <Box>
            {pathname === '/' ? (
              <Title order={1} className={classes.fvTitle}>
                Shimabu IT University
              </Title>
            ) : (
              <Text className={classes.fvTitle}>Shimabu IT University</Text>
            )}
            <Text className={classes.fvDesc}>
              しまぶーのポートフォリオのためのページです
            </Text>
          </Box>
          <Group>
            {icons.map((icon) => (
              <Anchor key={icon.name} href={icon.href}>
                <Image src={`/assets/${icon.name}.svg`} alt="" />
              </Anchor>
            ))}
          </Group>
        </Box>
      </Container>
    </Box>
  )
}
