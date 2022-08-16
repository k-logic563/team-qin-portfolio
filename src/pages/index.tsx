import type { NextPage } from 'next'

import { Top } from '@/features/Top'
import { AppHead } from '@/components/Element/Head'

const HomePage: NextPage = () => {
  return (
    <>
      <AppHead
        title="Shimabu IT University"
        description="しまぶーのポートフォリオのためのページです"
      />
      <Top />
    </>
  )
}

export default HomePage
