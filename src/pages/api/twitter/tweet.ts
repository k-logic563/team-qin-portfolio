import { NextApiResponse, NextApiRequest } from 'next'

import { twClient } from '@/lib/axios'
import { TwitterTweetsProps } from '@/types'
import { encodeUrl } from '@/utils/converter'

const getTweets = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query

  const { data } = await twClient.get<TwitterTweetsProps>(
    `tweets?${encodeUrl(query)}`
  )

  return res.status(200).json(data)
}

export default getTweets
