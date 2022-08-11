import React from 'react'
import { Title, createStyles, TitleOrder } from '@mantine/core'

type Props = {
  children: React.ReactNode
  order: TitleOrder
}

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: '26px',
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    paddingBottom: '20px',
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
  },
}))

export const Heading: React.FC<Props> = ({ children, order }) => {
  const { classes } = useStyles()

  return (
    <Title className={classes.title} order={order}>
      {children}
    </Title>
  )
}
