import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'

export const useFetcher = <T>(slug: string) => {
  const { data, error } = useSWR<T>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${slug}`,
    fetcher,
    {
      suspense: true,
    }
  )

  return {
    data,
    error,
  }
}
