import React from 'react'
import { NextPage } from 'next'

import { About } from '@/features/About'
import { AppHead } from '@/components/Element/Head'

const about: NextPage = () => {
  return (
    <>
      <AppHead
        title="Aboutページ"
        description="しまぶーのポートフォリオの紹介ページです"
      />
      <About />
    </>
  )
}

export default about
