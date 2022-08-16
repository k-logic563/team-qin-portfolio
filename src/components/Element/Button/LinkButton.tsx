import React from 'react'
import Link from 'next/link'
import { Button, ButtonProps } from '@mantine/core'

import * as styles from '@/styles'

type Props = ButtonProps & {
  href: string
  target?: string
}

export const LinkButton: React.FC<Props> = ({
  radius = 'xl',
  href,
  target,
  children,
}) => {
  const { classes } = styles.button.useStyles()
  return (
    <Link href={href} passHref>
      <Button
        target={target}
        component="a"
        radius={radius}
        className={classes.button}
      >
        {children}
      </Button>
    </Link>
  )
}
