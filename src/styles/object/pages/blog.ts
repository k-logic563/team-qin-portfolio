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
  contents: {
    'ul, ol': {
      listStylePosition: 'inside',
      margin: '1em 0',
    },
    p: {
      marginBottom: '1em',
    },
    'h1, h2, h3, h4': {
      margin: '1.5em 0 1em',
    },
    img: {
      maxWidth: '100%',
    },
    iframe: {
      width: '100%',
      maxWidth: '450px',
      height: '100%',
      aspectRatio: '16/9',
    },
  },
}))
