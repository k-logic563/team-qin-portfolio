import { NextApiResponse } from 'next'

import { client } from '@/lib/axios'
import { BlogContent } from '@/types'

const getBlogs = async (_: unknown, res: NextApiResponse) => {
  const { data } = await client.get<BlogContent>('blogs')
  return res.status(200).json({ contents: data.contents })
}

export default getBlogs
