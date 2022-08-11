import { Container, Box } from '@mantine/core'
import { useForm } from '@mantine/form'

import { Form } from './Form'
import { Heading } from '@/components/Element/Heading'

import { emailRegExp, initialValues } from '@/constants/form'

export const Contact = () => {
  const form = useForm({
    initialValues,
    validate: {
      name: (value) => (!value.trim() ? '※必須項目です' : null),
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
      message: (value) => (!value.trim() ? '※必須項目です' : null),
    },
  })

  const handleSubmit = async (values: typeof initialValues) => {
    console.table(values)
  }

  return (
    <Container size="lg" py={40}>
      <Box mb={24}>
        <Heading order={1}>Contact</Heading>
      </Box>
      <Form handleSubmit={handleSubmit} form={form} />
    </Container>
  )
}
