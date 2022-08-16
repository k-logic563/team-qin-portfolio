import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  button: {
    fontFamily: "'Open Sans', sans-serif",
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[6],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    ':hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[6],
    },
  },
}))
