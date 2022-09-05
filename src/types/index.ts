import { MicroCMSListResponse } from 'microcms-js-sdk'

export type BlogResponse = {
  id: string
  title: string
  description: string
  content: string
  eyecatch: {
    url: string
    height: number
    width: number
  }
  publishedAt: string
}

export type PortfolioResponse = {
  id: string
  title: string
  description: string
  link: string
  thumbnail: {
    url: string
    height: number
    width: number
  }
  range_date: string
  publishedAt: string
}

export type TwitterUserProps = {
  profile_image_url: string
  id: string
  username: string
  name: string
}

export type TwitterTweetProps = {
  created_at: string
  id: string
  text: string
}

export type BlogContent = MicroCMSListResponse<BlogResponse>
export type PortfolioContent = MicroCMSListResponse<PortfolioResponse>
