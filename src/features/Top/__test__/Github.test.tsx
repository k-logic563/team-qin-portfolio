import { render } from '@testing-library/react'
import { SWRResponse, SWRConfig, Middleware } from 'swr'

import { Github } from '@/features/Top/Github'
import { ErrorWrapper } from '@/components/Element/Error/ErrorWrapper'

import { formatGithubLanguages } from '@/utils/format'
import { props, mockData } from './mocks/github'

test('GitHubデータ取得、表示', () => {
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
    <SWRConfig value={{ use: [middleware] }}>
      <Github />
    </SWRConfig>
  )

  const language = formatGithubLanguages(mockData)[0][0]

  expect(getByText(props.name)).toBeInTheDocument()
  expect(getByText(props.description)).toBeInTheDocument()
  expect(getByText(props.forkCount)).toBeInTheDocument()
  expect(getByText(props.stargazerCount)).toBeInTheDocument()
  expect(getByText(props.languageName)).toBeInTheDocument()
  expect(getByText(`${language.value}%`)).toBeInTheDocument()
})

test('エラー表示', () => {
  console.error = jest.fn()

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
    <SWRConfig value={{ use: [middleware] }}>
      <ErrorWrapper message="failed to fetch">
        <Github />
      </ErrorWrapper>
    </SWRConfig>
  )

  expect(getByText('failed to fetch')).toBeInTheDocument()
})
