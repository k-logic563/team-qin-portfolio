import format from 'date-fns/format'

import { Repositories } from '@/types'

export const formatDate = (dateStr: string, formatStr = 'yyyy-MM-dd') =>
  format(new Date(dateStr), formatStr)

export const formatGithubLanguages = (data: Repositories) =>
  data.user.repositories.edges.map((repo) => {
    const totalSize = repo.node.languages.totalSize
    return repo.node.languages.edges.flatMap((lang) => {
      const size = parseFloat(((lang.size / totalSize) * 100).toFixed(1))

      if (!size) return []

      return {
        value: parseFloat(((lang.size / totalSize) * 100).toFixed(1)),
        color: lang.node.color,
        name: lang.node.name,
      }
    })
  })
