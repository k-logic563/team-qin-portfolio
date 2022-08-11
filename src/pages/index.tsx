import type { NextPage } from 'next'

import { Top } from '@/features/Top'
import { AppHead } from '@/components/Element/Head'

const Home: NextPage = () => {
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

export default Home
