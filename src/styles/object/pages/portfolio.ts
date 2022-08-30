import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  list: {
    display: 'grid',
    gap: '40px 20px',
    [theme.fn.largerThan('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.fn.largerThan('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  title: {
    fontSize: '22px',
    fontWeight: 700,
    marginBottom: '.5em',
  },
  date: {
    color: theme.colors.dark[2],
    fontSize: '12px',
  },
}))
