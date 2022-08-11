import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 700,
    marginBottom: '8px',
    fontSize: '22px',
  },
  description: {
    margin: '0 0 8px',
  },
  date: {
    color: theme.colors.dark[2],
    fontSize: '12px',
    margin: 0,
  },
}))
