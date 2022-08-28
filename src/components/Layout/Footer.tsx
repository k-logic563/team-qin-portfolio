import React from 'react'
import { Container, Text } from '@mantine/core'

export const Footer = () => {
  return (
    <Container
      py={25}
      sx={(theme) => ({
        borderTop: `1px solid ${theme.colors.gray[2]}`,
      })}
    >
      <Text align="center" size={10}>
        &copy;{new Date().getFullYear()} GunChang IT University
      </Text>
    </Container>
  )
}
