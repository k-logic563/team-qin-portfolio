import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useFetcher = <T>(slug: string) => {
  const { data, error } = useSWR<T>(`/api/${slug}`, fetcher, {
    suspense: true,
  })

  return {
    data,
    error,
  }
}
