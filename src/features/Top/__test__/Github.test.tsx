import { Suspense } from 'react'
import { render } from '@testing-library/react'
import { SWRResponse, SWRConfig, Middleware } from 'swr'

import { Github } from '@/features/Top/Github'
import { ErrorWrapper } from '@/components/Element/Error/ErrorWrapper'

import { props, mockData } from './mocks/github'

describe('GitHubデータ取得、表示', () => {
  it('正常にデータが反映される', () => {
    const middleware: Middleware = () => {
      return (): SWRResponse<any, any> => {
        return {
          data: mockData,
          error: undefined,
          mutate: (_) => Promise.resolve(),
          isValidating: false,
        }
      }
    }

    const { getByText } = render(
      <ErrorWrapper message="failed to fetch">
        <Suspense fallback={<p>loading</p>}>
          <SWRConfig value={{ use: [middleware] }}>
            <Github />
          </SWRConfig>
        </Suspense>
      </ErrorWrapper>
    )

    expect(getByText(props.name)).toBeInTheDocument()
    expect(getByText(props.description)).toBeInTheDocument()
    expect(getByText(props.forkCount)).toBeInTheDocument()
    expect(getByText(props.stargazerCount)).toBeInTheDocument()
  })

  it('エラー表示', () => {
    const middleware: Middleware = () => {
      return (): SWRResponse<any, any> => {
        return {
          data: undefined,
          error: Error(),
          mutate: (_) => Promise.resolve(),
          isValidating: false,
        }
      }
    }

    const { getByText } = render(
      <ErrorWrapper message="failed to fetch">
        <Suspense fallback={<p>loading</p>}>
          <SWRConfig value={{ use: [middleware] }}>
            <Github />
          </SWRConfig>
        </Suspense>
      </ErrorWrapper>
    )

    expect(getByText('failed to fetch')).toBeInTheDocument()
  })

  it('データ取得待機中', () => {
    const { getByText } = render(
      <ErrorWrapper message="failed to fetch">
        <Suspense fallback={<p>loading</p>}>
          <Github />
        </Suspense>
      </ErrorWrapper>
    )

    expect(getByText('loading')).toBeInTheDocument()
  })
})
