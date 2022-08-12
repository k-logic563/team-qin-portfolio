import React from 'react'
import { Box, Stack, Text, Group, Center, Progress } from '@mantine/core'
import { IconStar, IconGitFork } from '@tabler/icons'

import { Heading } from '@/components/Element/Heading'
import { LinkButton } from '@/components/Element/Button/LinkButton'

import * as styles from '@/styles'

export const Github = () => {
  const { classes } = styles.github.useStyles()

  return (
    <>
      <Box mb={24}>
        <Heading order={2}>Github</Heading>
      </Box>
      <Stack spacing={40} mb={32}>
        {[...Array(5).keys()].map((_, i) => (
          <Box key={i}>
            <Text className={classes.title} mb={8}>
              lightsound/nexst-tailwind
            </Text>
            <Text mb={8}>lightsound/nexst-tailwind</Text>
            <Group className={classes.reviews} mb={8}>
              <Text>
                <IconStar />
                117
              </Text>
              <Text>
                <IconGitFork />
                18
              </Text>
            </Group>
            <Box>
              <Progress
                mb={8}
                sections={[
                  { value: 60, color: '#3178c6' },
                  { value: 30, color: '#f1e05a' },
                ]}
              />
              <Group spacing="lg">
                <Group spacing={6}>
                  <Box
                    className={classes.round}
                    sx={{ backgroundColor: '#3178c6' }}
                  />
                  <Text className={classes.language}>TypeScript</Text>
                  <Text className={classes.percentage}>60%</Text>
                </Group>
                <Group spacing={6}>
                  <Box
                    className={classes.round}
                    sx={{ backgroundColor: '#f1e05a' }}
                  />
                  <Text className={classes.language}>JavaScript</Text>
                  <Text className={classes.percentage}>30%</Text>
                </Group>
              </Group>
            </Box>
          </Box>
        ))}
      </Stack>
      <Center>
        <LinkButton href="https://github.com/k-logic563" target="_blank">
          View On GitHub
        </LinkButton>
      </Center>
    </>
  )
}
