import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  fv: {
    height: '250px',
    backgroundColor: theme.colors.pink[6],
    color: '#fff',
    position: 'relative',
  },
  fvWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  fvInner: {
    display: 'grid',
    rowGap: '43px',
    [theme.fn.largerThan('md')]: {
      gridTemplateColumns: '1fr auto',
      justifyContent: 'space-between',
    },
  },
  fvTitle: {
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    marginBottom: '.2em',
    fontSize: 'clamp(28px, 5vw, 36px)',
    lineHeight: 1,
  },
  fvDesc: {
    fontWeight: 700,
    fontSize: '14px',
    [theme.fn.largerThan('md')]: {
      fontSize: '16px',
    },
  },
}))
