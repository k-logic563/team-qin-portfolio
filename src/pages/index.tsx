import type { NextPage } from 'next'

import { Top } from '@/features/Top'
import { AppHead } from '@/components/Element/Head'

const HomePage: NextPage = () => {
  return (
    <>
      <AppHead
        title="GunChang IT University"
        description="がんちゃんのポートフォリオのためのページです"
      />
      <Top />
    </>
  )
}

export default HomePage
