import type { NextPage, InferGetStaticPropsType } from 'next'

import { Top } from '@/features/Top'
import { AppHead } from '@/components/Element/Head'

import { client } from '@/lib/axios'
import { BlogContent } from '@/types'

export type HomeProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const { data } = await client.get<BlogContent>('blogs', {
    params: { limit: 6, offset: 0 },
  })

  return {
    props: {
      response: data,
    },
    revalidate: 10,
  }
}

const HomePage: NextPage<HomeProps> = ({ response }) => {
  const contents = response.contents

  return (
    <>
      <AppHead
        title="Shimabu IT University"
        description="しまぶーのポートフォリオのためのページです"
      />
      <Top blogs={contents} />
    </>
  )
}

export default HomePage
