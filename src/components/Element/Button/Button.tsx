import React from 'react'
import { Button as MButton, ButtonProps } from '@mantine/core'

type Props = ButtonProps

export const Button: React.FC<Props> = ({
  radius = 'xl',
  color = 'dark',
  type = 'button',
  children,
}) => {
  return (
    <MButton
      type={type}
      radius={radius}
      color={color}
      sx={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {children}
    </MButton>
  )
}
