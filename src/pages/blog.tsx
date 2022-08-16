import { NextPage } from 'next'

import { Blog } from '@/features/Blog'
import { AppHead } from '@/components/Element/Head'

const BlogPage: NextPage = () => {
  return (
    <>
      <AppHead
        title="Blog一覧ページ"
        description="しまぶーのポートフォリオのブログ一覧ページです"
      />
      <Blog />
    </>
  )
}

export default BlogPage
