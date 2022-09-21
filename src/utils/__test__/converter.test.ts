import { encodeUrl } from '@/utils/converter'

test('クエリオブジェクトをurl形式に変換', () => {
  const query = {
    keyword: 'hello',
    category: 'dammy-cat',
  }

  expect(encodeUrl(query)).toBe('keyword=hello&category=dammy-cat')
})
