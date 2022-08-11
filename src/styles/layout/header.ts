import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  logo: {
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    fontSize: '18px',
  },
  icon: {
    borderColor: theme.colors.dark[0],
  },
  link: {
    textDecoration: 'none',
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    fontSize: '18px',
  },
  modal: {
    '.mantine-Modal-modal': {
      backgroundColor: theme.colors.pink[6],
      paddingTop: '90px',
    },
  },
  modalLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '28px',
    fontWeight: 700,
    fontFamily: theme.fontFamilyMonospace,
  },
}))
