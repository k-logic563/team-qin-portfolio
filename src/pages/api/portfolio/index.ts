import { NextApiResponse, NextApiRequest } from 'next'

import { client } from '@/lib/axios'
import { BlogContent } from '@/types'

const getPortfolio = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query

  const { data } = await client.get<BlogContent>('portfolio', {
    params: {
      limit: Number(query.limit) ?? 10,
      offset: Number(query.offset) ?? 0,
    },
  })

  return res.status(200).json({ contents: data.contents })
}

export default getPortfolio
