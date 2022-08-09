import React from 'react'
import Image from 'next/image'
import {
  Box,
  createStyles,
  Title,
  Container,
  Grid,
  Group,
  Text,
  Anchor,
} from '@mantine/core'

import { icons } from '@/constants/page'

const useStyles = createStyles((theme) => ({
  fv: {
    height: '250px',
    backgroundColor: theme.colors.pink[6],
    color: '#fff',
    position: 'relative',
  },
  fvInner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  fvTitle: {
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    marginBottom: '4px',
    fontSize: 'clamp(28px, 5vw, 36px)',
  },
  fvDesc: {
    fontWeight: 700,
  },
}))

export const Top = () => {
  const { classes } = useStyles()

  return (
    <Box className={classes.fv}>
      <Container size="xl" className={classes.fvInner}>
        <Grid align="center" justify="space-between">
          <Grid.Col sm={10}>
            <Title order={1} className={classes.fvTitle}>
              Shimabu IT University
            </Title>
            <Text className={classes.fvDesc}>
              しまぶーのポートフォリオのためのページです
            </Text>
          </Grid.Col>
          <Grid.Col sm={2}>
            <Group>
              {icons.map((icon) => (
                <Anchor key={icon.name} href={icon.href}>
                  <Image
                    src={`/${icon.name}.svg`}
                    alt=""
                    width={icon.width}
                    height={icon.height}
                  />
                </Anchor>
              ))}
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}
