import React from 'react'
import { NextPage } from 'next'

import { About } from '@/features/About'
import { AppHead } from '@/components/Element/Head'

const AboutPage: NextPage = () => {
  return (
    <>
      <AppHead
        title="About"
        description="がんちゃんのポートフォリオの紹介ページです"
      />
      <About />
    </>
  )
}

export default AboutPage
