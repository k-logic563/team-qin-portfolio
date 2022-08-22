import axios from 'axios'

const client = axios.create({
  baseURL: process.env.MICROCMS_BASE_URL,
  headers: {
    'X-MICROCMS-API-KEY': `${process.env.MICROCMS_API_KEY}`,
  },
})

export { client }
