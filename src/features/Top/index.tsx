import React from 'react'
import { Box, Container, SimpleGrid } from '@mantine/core'

import { FirstView } from '@/components/Element/FirstView'
import { Blog } from '@/features/Top/Blog'
import { Portfolio } from '@/features/Top/Portfolio'
import { Github } from '@/features/Top/Github'
import { Twitter } from '@/features/Top/Twitter'

export const Top = () => {
  return (
    <>
      <FirstView />
      <Box pt={80} pb={100}>
        <Container size="lg">
          <Blog />
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
