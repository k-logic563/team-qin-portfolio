import axios from 'axios'

const client = axios.create({
  baseURL: process.env.MICROCMS_BASE_URL,
  headers: {
    'X-MICROCMS-API-KEY': `${process.env.MICROCMS_API_KEY}`,
  },
})

const twClient = axios.create({
  baseURL: `https://api.twitter.com/2/users/${process.env.TWITTER_ID}`,
  headers: {
    Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
  },
})

export { client, twClient }
