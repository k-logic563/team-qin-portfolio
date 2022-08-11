import React from 'react'
import { Title, TitleOrder } from '@mantine/core'

import * as styles from '@/styles'

type Props = {
  children: React.ReactNode
  order: TitleOrder
}

export const Heading: React.FC<Props> = ({ children, order }) => {
  const { classes } = styles.heading.useStyles()

  return (
    <Title className={classes.title} order={order}>
      {children}
    </Title>
  )
}
