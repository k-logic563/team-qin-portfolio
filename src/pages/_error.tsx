import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import { Text, Box, Container, Center } from '@mantine/core'

import { LinkButton } from '@/components/Element/Button/LinkButton'
import { Heading } from '@/components/Element/Heading'

interface Props {
  title: string
  description: string
}

const ErrorPage: NextPage<Props> = ({ title, description }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Container size="lg" py={40}>
        <Box mb={24}>
          <Heading order={1}>{title}</Heading>
        </Box>
        <Text align="center" mb="2em">
          {description}
        </Text>
        <Center>
          <LinkButton href="/">トップページへ戻る</LinkButton>
        </Center>
      </Container>
    </>
  )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const props = {
    title: 'Unknown Error',
    description: '不明なエラーが発生しました。',
  }
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404

  if (statusCode === 404) {
    props.title = '404 Not Found'
    props.description = '入力したページが発見できませんでした。'
  }
  if (statusCode === 500) {
    props.title = '500 Internal Server Error'
    props.description = 'サーバーエラーによりページが表示できませんでした。'
  }

  return props
}

export default ErrorPage
