import type { NextPage } from 'next'
import Head from 'next/head'
import { Title } from '@mantine/core'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>トップページ | Qin Team Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title order={1}>
          Welcome to Qin Portfolio.
        </Title>
      </main>
    </div>
  )
}

export default Home
