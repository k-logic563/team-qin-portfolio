import { MicroCMSListResponse } from 'microcms-js-sdk'

export type Content = {
  id: string
  title: string
  description: string
  content: string
  eyecatch: {
    url: string
    height: number
    width: number
  }
  category: {
    id: string
    name: string
  }
  publishedAt: string
}

export type BlogContent = MicroCMSListResponse<Content>
