import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
    minHeight: '100vh',
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    height: '65px',
    display: 'grid',
    alignItems: 'center',
  },
  main: {
    paddingTop: '65px',
  },
}))
