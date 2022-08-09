import { useState } from 'react'
import type { AppProps } from 'next/app'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Global,
} from '@mantine/core'

import { MainLayout } from '@/components/Layout/MainLayout'

import { themeConfigs } from '@/config/mantine'

const MyGlobalStyles: React.FC = () => (
  <Global
    styles={(theme) => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
      body: {
        ...theme.fn.fontStyles(),
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        color:
          theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[6],
        lineHeight: theme.lineHeight,
      },
      'a:not(.mantine-Button-root)': {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          opacity: 0.6,
        },
      },
    })}
  />
)

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ ...themeConfigs, colorScheme }}>
        <MainLayout>
          <MyGlobalStyles />
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
