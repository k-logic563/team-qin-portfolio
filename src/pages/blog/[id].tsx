import React from 'react'
import { NextPage } from 'next'

import { BlogId } from '@/features/Blog/Detail'
import { AppHead } from '@/components/Element/Head'

// NOTE: MicroCMS SSG ISR

const BlogIdPage: NextPage = () => {
  return (
    <>
      <AppHead
        title="仮ブログ詳細ページ"
        description="仮ブログディスクリプション"
      />
      <BlogId />
    </>
  )
}

export default BlogIdPage
