import React from 'react'
import cheerio from 'cheerio'
import { ParsedUrlQuery } from 'querystring'
import { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next'

import { Show } from '@/features/Blog/Show'
import { AppHead } from '@/components/Element/Head'

import { BlogContent, BlogResponse } from '@/types'
import { client } from '@/lib/axios'
import { codeHighlight } from '@/utils/code-highlight'

import 'highlight.js/styles/atom-one-dark.css'

type BlogDetailProps = InferGetStaticPropsType<typeof getStaticProps>
type Params = ParsedUrlQuery & {
  id: string
}

const isDraft = (item: any): item is { draftKey: string } =>
  !!(item?.draftKey && typeof item.draftKey === 'string')

export const getStaticPaths = async () => {
  const { data } = await client.get<BlogContent>('blogs')
  const paths = data.contents.map((x) => `/blog/${x.id}`)

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async (ctx: GetStaticPropsContext<Params>) => {
  const { params, previewData } = ctx
  const draftKey = isDraft(previewData) ? previewData.draftKey : ''
  const { data } = await client.get<BlogResponse>(`blogs/${params?.id}`, {
    params: {
      draftKey,
    },
  })
  const $ = cheerio.load(data.content, null, false)

  codeHighlight($)

  // 記事データを集約
  const props = {
    data: { ...data, content: $.html() },
  }

  return {
    props,
    revalidate: 10,
  }
}

const BlogIdPage: NextPage<BlogDetailProps> = ({ data }) => {
  return (
    <>
      <AppHead title={data.title} description={data.description} />
      <Show {...data} />
    </>
  )
}

export default BlogIdPage
