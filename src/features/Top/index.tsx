import React, { Suspense } from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  Title,
  Text,
  Group,
  Image,
  Center,
} from '@mantine/core'

import { Blog } from '@/features/Top/Blog'
import { Portfolio } from '@/features/Top/Portfolio'
import { Github } from '@/features/Top/Github'
import { Twitter } from '@/features/Top/Twitter'
import { Heading } from '@/components/Element/Heading'
import { ErrorWrapper } from '@/components/Element/Error/ErrorWrapper'
import { Loader } from '@/components/Element/Loader'

import { icons } from '@/constants/page'

import * as styles from '@/styles'

export const Top = () => {
  const { classes } = styles.firstview.useStyles()

  return (
    <>
      <Box className={classes.fv}>
        <Container size="lg" className={classes.fvWrapper}>
          <Box className={classes.fvInner}>
            <Box>
              <Title order={1} className={classes.fvTitle}>
                GunChang IT University
              </Title>
              <Text className={classes.fvDesc}>
                がんちゃんのポートフォリオのためのページです
              </Text>
            </Box>
            <Group>
              {icons.map((icon) => (
                <a key={icon.name} href={icon.href} target="blank">
                  <Image src={`/assets/${icon.name}.svg`} alt="" />
                </a>
              ))}
            </Group>
          </Box>
        </Container>
      </Box>
      <Box pt={80} pb={100}>
        <Container size="lg">
          <Box mb={24}>
            <Heading order={2}>Blog</Heading>
          </Box>
          <ErrorWrapper message="Failed to Fetch Blog Data.">
            <Suspense
              fallback={
                <Center>
                  <Loader />
                </Center>
              }
            >
              <Blog />
            </Suspense>
          </ErrorWrapper>
        </Container>
      </Box>
      <Container size="lg">
        <Box mb={24}>
          <Heading order={2}>Portfolio</Heading>
        </Box>
        <ErrorWrapper message="Failed to Fetch Portfolio Data.">
          <Suspense
            fallback={
              <Center>
                <Loader />
              </Center>
            }
          >
            <Portfolio />
          </Suspense>
        </ErrorWrapper>
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
            <ErrorWrapper message="Failed to Fetch GitHub Data.">
              <Suspense
                fallback={
                  <Center>
                    <Loader />
                  </Center>
                }
              >
                <Github />
              </Suspense>
            </ErrorWrapper>
          </Box>
          <Box>
            <Box mb={24}>
              <Heading order={2}>Twitter</Heading>
            </Box>
            <ErrorWrapper message="Failed to Fetch Twitter Data.">
              <Suspense
                fallback={
                  <Center>
                    <Loader />
                  </Center>
                }
              >
                <Twitter />
              </Suspense>
            </ErrorWrapper>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  )
}
