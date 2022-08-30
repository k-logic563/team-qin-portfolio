import { NextPage, InferGetStaticPropsType } from 'next'

import { Blog } from '@/features/Blog'
import { AppHead } from '@/components/Element/Head'

import { client } from '@/lib/axios'
import { BlogContent } from '@/types'

export type BlogProps = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const { data } = await client.get<BlogContent>('blogs')

  return {
    props: {
      response: data,
    },
    revalidate: 10,
  }
}

const BlogPage: NextPage<BlogProps> = ({ response }) => {
  return (
    <>
      <AppHead
        title="Blog"
        description="がんちゃんのポートフォリオのブログ一覧ページです"
      />
      <Blog {...response} />
    </>
  )
}

export default BlogPage
