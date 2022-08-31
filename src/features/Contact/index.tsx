import { useState } from 'react'
import { Container, Box, Text } from '@mantine/core'
import axios from 'axios'
import { useForm } from '@mantine/form'

import { Form } from './Form'
import { Heading } from '@/components/Element/Heading'

import { emailRegExp, initialValues } from '@/constants/form'

export const Contact = () => {
  const [mode, setMode] = useState('form')
  const form = useForm({
    initialValues,
    validate: {
      name: (value) => (value.trim() ? null : '※必須項目です'),
      email: (value) => {
        const newValue = value.trim()
        if (!newValue) {
          return '※必須項目です'
        }
        if (!emailRegExp.test(newValue)) {
          return '※形式を確認してください'
        }
        return null
      },
      message: (value) => (value.trim() ? null : '※必須項目です'),
    },
  })

  const handleSubmit = async (values: typeof initialValues) => {
    setMode('pending')
    try {
      await axios.post<{ contents: string }>('/api/contact', values)
      setMode('done')
    } catch (e) {
      console.error(e)
      setMode('form')
    }
  }

  return (
    <Container size="lg" py={40}>
      <Box mb={24}>
        <Heading order={1}>Contact</Heading>
      </Box>
      {mode === 'done' ? (
        <Text>お問い合わせ完了しました。</Text>
      ) : (
        <Form
          handleSubmit={handleSubmit}
          form={form}
          loading={mode === 'pending'}
        />
      )}
    </Container>
  )
}
