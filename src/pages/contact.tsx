import { NextPage } from 'next'

import { Contact } from '@/features/Contact'
import { AppHead } from '@/components/Element/Head'

const ContactPage: NextPage = () => {
  return (
    <>
      <AppHead
        title="Contactページ"
        description="しまぶーのポートフォリオのお問い合わせページです"
      />
      <Contact />
    </>
  )
}

export default ContactPage
