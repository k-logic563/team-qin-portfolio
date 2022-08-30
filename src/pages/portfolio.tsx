import { NextPage, InferGetStaticPropsType } from 'next'

import { Portfolio } from '@/features/Portfolio'
import { AppHead } from '@/components/Element/Head'

import { client } from '@/lib/axios'
import { PortfolioContent } from '@/types'

export type BlogProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const { data } = await client.get<PortfolioContent>('portfolio')

  return {
    props: {
      response: data,
    },
    revalidate: 10,
  }
}

const PortfolioPage: NextPage<BlogProps> = ({ response }) => {
  return (
    <>
      <AppHead
        title="Portfolio"
        description="がんちゃんのポートフォリオのポートフォリオページです"
      />
      <Portfolio {...response} />
    </>
  )
}

export default PortfolioPage
