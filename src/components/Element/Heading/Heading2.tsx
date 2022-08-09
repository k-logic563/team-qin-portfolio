import React from 'react'
import { Title, createStyles } from '@mantine/core'

type Props = {
  children: React.ReactNode
}

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    paddingBottom: '20px',
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
  },
}))

export const Heading2: React.FC<Props> = ({ children }) => {
  const { classes } = useStyles()

  return <Title className={classes.title}>{children}</Title>
}
