import { NextApiResponse, NextApiRequest } from 'next'

import { client } from '@/lib/axios'
import { BlogContent } from '@/types'

const getBlogs = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query

  const { data } = await client.get<BlogContent>('blogs', {
    params: {
      offset: Number(query.offset) ?? 0,
    },
  })
  return res.status(200).json({ contents: data.contents })
}

export default getBlogs
