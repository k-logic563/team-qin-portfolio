declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly MICROCMS_API_KEY: string
    readonly MICROCMS_BASE_URL: string
    readonly NEXT_PUBLIC_BASE_URL: string
    readonly TWITTER_ID: string
    readonly TWITTER_TOKEN: string
  }
}
