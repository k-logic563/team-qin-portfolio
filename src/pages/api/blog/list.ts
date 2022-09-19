import { NextApiResponse, NextApiRequest } from 'next'

import { client } from '@/lib/axios'
import { BlogContent } from '@/types'
import { encodeUrl } from '@/utils/converter'

const getBlogs = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query

  const { data } = await client.get<BlogContent>(`blogs?${encodeUrl(query)}`)
  return res.status(200).json({ contents: data.contents })
}

export default getBlogs
