import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  title: {
    fontSize: '18px',
    fontWeight: 700,
  },
  reviews: {
    color: theme.colors.dark[2],
    fontSize: '12px',
    svg: {
      width: '15px',
      verticalAlign: '-.6em',
      marginRight: '.2em',
    },
  },
  round: {
    width: '6px',
    height: '6px',
    borderRadius: '6px',
  },
  language: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: '12px',
    fontWeight: 700,
  },
  percentage: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: '12px',
    fontWeight: 700,
    color: theme.colors.dark[2],
  },
}))
