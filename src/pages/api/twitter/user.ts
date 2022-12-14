import { NextApiResponse, NextApiRequest } from 'next'

import { twClient } from '@/lib/axios'
import { TwitterUserProps } from '@/types'
import { encodeUrl } from '@/utils/converter'

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query

  const { data } = await twClient.get<TwitterUserProps>(`?${encodeUrl(query)}`)

  return res.status(200).json(data)
}

export default getUser
