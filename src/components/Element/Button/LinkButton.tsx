import React from 'react'
import Link from 'next/link'
import { Button, ButtonProps } from '@mantine/core'

type Props = ButtonProps & {
  href: string
}

export const LinkButton: React.FC<Props> = ({
  radius = 'xl',
  color = 'dark',
  href,
  children,
}) => {
  return (
    <Link href={href} passHref>
      <Button
        component="a"
        radius={radius}
        color={color}
        sx={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        {children}
      </Button>
    </Link>
  )
}
