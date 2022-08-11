import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
}

export const AppHead: React.FC<Props> = ({ title, description }) => {
  const newTitle = `${title} | Qin Team Portfolio`

  return (
    <Head>
      <title>{newTitle}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
