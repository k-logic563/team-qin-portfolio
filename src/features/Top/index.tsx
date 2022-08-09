import React from 'react'
import {
  Box,
  createStyles,
  Title,
  Container,
  Group,
  Text,
  Anchor,
  Image,
} from '@mantine/core'

import { Blog } from '@/features/Top/Blog'
import { Portfolio } from '@/features/Top/Portfolio'

import { icons } from '@/constants/page'

const useStyles = createStyles((theme) => ({
  fv: {
    height: '250px',
    backgroundColor: theme.colors.pink[6],
    color: '#fff',
    position: 'relative',
  },
  fvWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  fvInner: {
    display: 'grid',
    rowGap: '43px',
    [theme.fn.largerThan('md')]: {
      gridTemplateColumns: '1fr auto',
      justifyContent: 'space-between',
    },
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
                <Anchor key={icon.name} href={icon.href}>
                  <Image src={`/assets/${icon.name}.svg`} alt="" />
                </Anchor>
              ))}
            </Group>
          </Box>
        </Container>
      </Box>
      <Box pt={80} pb={100}>
        <Container size="lg">
          <Blog />
        </Container>
      </Box>
      <Container size="lg">
        <Portfolio />
      </Container>
    </>
  )
}
