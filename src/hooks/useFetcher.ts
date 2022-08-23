import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'

type Params = {
  limit: number
  offset: number
}

export const useFetcher = <T>(apiName: string, params?: Partial<Params>) => {
  const { data, error } = useSWR<T>(
    `/api/${apiName}?limit=${params?.limit}`,
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
