import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  title: {
    fontSize: '26px',
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    paddingBottom: '20px',
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
  },
}))
