import React from 'react'

import { Header } from './Header'
import { Footer } from './Footer'

import * as styles from '@/styles'

type Props = {
  children: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  const { classes } = styles.main.useStyles()

  return (
    <div className={classes.wrapper}>
      <div>
        <Header />
      </div>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  )
}
