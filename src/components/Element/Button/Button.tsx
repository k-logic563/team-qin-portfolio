import React from 'react'
import { Button as MButton, ButtonProps } from '@mantine/core'

import * as styles from '@/styles'

type Props = ButtonProps & {
  handleClick?: () => void
  loading?: boolean
}

export const Button: React.FC<Props> = ({
  radius = 'xl',
  color = 'dark',
  type = 'button',
  loading = false,
  handleClick,
  children,
}) => {
  const { classes } = styles.button.useStyles()

  return (
    <MButton
      type={type}
      radius={radius}
      color={color}
      className={classes.button}
      onClick={handleClick}
      loading={loading}
      loaderProps={{
        color: 'pink',
      }}
    >
      {children}
    </MButton>
  )
}
