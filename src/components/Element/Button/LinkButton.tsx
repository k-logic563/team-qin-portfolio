import React from 'react'
import Link from 'next/link'
import { Button, ButtonProps } from '@mantine/core'

type Props = ButtonProps & {
  href: string
  target?: string
}

export const LinkButton: React.FC<Props> = ({
  radius = 'xl',
  color = 'dark',
  href,
  target,
  children,
}) => {
  return (
    <Link href={href} passHref>
      <Button
        target={target}
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
