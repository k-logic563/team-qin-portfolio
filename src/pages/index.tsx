import type { NextPage } from 'next'
import Head from 'next/head'

import { Top } from '@/features/Top'
import { LinkButton } from '@/components/Element/Button/LinkButton'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>トップページ | Qin Team Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Top />
        <LinkButton href="/blog">View All</LinkButton>
      </main>
    </div>
  )
}

export default Home
