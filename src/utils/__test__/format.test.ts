import { formatDate } from '@/utils/format'

test('日付の形式を変換', () => {
  const date = '2022-01-01T02:06:56.710Z'
  expect(formatDate(date)).toBe('2022-01-01')
  expect(formatDate(date, 'yyyy/MM/dd')).toBe('2022/01/01')
})
