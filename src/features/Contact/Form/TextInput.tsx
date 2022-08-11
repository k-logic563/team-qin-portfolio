import React from 'react'
import { TextInput as MTextInput } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'

import { initialValues } from '@/constants/form'

type Props = {
  label: string
  placeholder?: string
  getInputProps: UseFormReturnType<typeof initialValues>['getInputProps']
}

export const TextInput: React.FC<Props> = ({
  getInputProps,
  label,
  placeholder,
}) => {
  return (
    <MTextInput
      label={label}
      placeholder={placeholder}
      styles={{
        label: {
          fontWeight: 600,
          marginBottom: '.1em',
        },
      }}
      {...getInputProps}
    />
  )
}
