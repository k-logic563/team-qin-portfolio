import React from 'react'
import { Box } from '@mantine/core'

import { Header } from './Header'
import { Footer } from './Footer'

import * as styles from '@/styles'

type Props = {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const { classes } = styles.main.useStyles()

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.header}>
        <Box>
          <Header />
        </Box>
      </Box>
      <main className={classes.main}>{children}</main>
      <Box>
        <Footer />
      </Box>
    </Box>
  )
}
