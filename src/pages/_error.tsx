import { NextPage, NextPageContext } from 'next'
import Error from 'next/error'
import { createStyles, Box } from '@mantine/core'

interface Props {
  statusCode?: number
}

const useStyles = createStyles(() => ({
  wrapper: {
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    div: {
      height: 'auto !important',
    },
  },
}))

const ErrorPage: NextPage<Props> = ({ statusCode }) => {
  const { classes } = useStyles()

  return statusCode ? (
    <Box className={classes.wrapper}>
      <Error statusCode={statusCode}></Error>
    </Box>
  ) : (
    <p>An error occurred on client</p>
  )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default ErrorPage
