import React from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { Text } from '@mantine/core'

type Props = {
  children: React.ReactNode
}

const ErrorMessage = ({ error }: FallbackProps) => {
  return <Text>{error.message}</Text>
}

export const ErrorWrapper: React.FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorMessage}>{children}</ErrorBoundary>
  )
}
