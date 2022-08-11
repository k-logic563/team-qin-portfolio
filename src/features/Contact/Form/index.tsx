import { Center, Box } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'

import { initialValues } from '@/constants/form'
import { Button } from '@/components/Element/Button/Button'
import { TextInput } from './TextInput'
import { Textarea } from './TextArea'

type Props = {
  handleSubmit: (values: typeof initialValues) => Promise<void>
  form: UseFormReturnType<typeof initialValues>
}

export const Form: React.FC<Props> = ({ form, handleSubmit }) => {
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Box mb={20}>
        <TextInput
          label="Email"
          placeholder="your@email.com"
          getInputProps={form.getInputProps('email')}
        />
      </Box>
      <Box mb={20}>
        <TextInput
          label="Name"
          placeholder="Taro Yamada"
          getInputProps={form.getInputProps('name')}
        />
      </Box>
      <Box mb={24}>
        <Textarea
          label="Your message"
          placeholder="I want to order your goods"
          getInputProps={form.getInputProps('message')}
        />
      </Box>
      <Center>
        <Button type="submit">Send Message</Button>
      </Center>
    </form>
  )
}
