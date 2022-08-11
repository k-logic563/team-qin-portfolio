import React from 'react'
import { NextPage } from 'next'

import { Detail } from '@/features/Blog/Detail'
import { AppHead } from '@/components/Element/Head'

// NOTE: MicroCMS SSG ISR

const BlogPage: NextPage = () => {
  return (
    <>
      <AppHead
        title="仮ブログ詳細ページ"
        description="仮ブログディスクリプション"
      />
      <Detail />
    </>
  )
}

export default BlogPage
