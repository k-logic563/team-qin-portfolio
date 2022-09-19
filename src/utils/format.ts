import format from 'date-fns/format'

export const formatDate = (dateStr: string, formatStr = 'yyyy-MM-dd') =>
  format(new Date(dateStr), formatStr)
