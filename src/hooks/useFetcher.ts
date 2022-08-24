import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'

export const useFetcher = <T>(slug: string) => {
  const { data, error } = useSWR<T>(`/api/${slug}`, fetcher, {
    suspense: true,
  })

  return {
    data,
    error,
  }
}
