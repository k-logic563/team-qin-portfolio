import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    maxHeight: 'clamp(350px, 50vw, 540px)',
    marginBottom: '24px',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  inner: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    columnGap: '16px',
  },
  title: {
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 700,
  },
  date: {
    fontSize: '12px',
    color: theme.colors.dark[2],
  },
}))
