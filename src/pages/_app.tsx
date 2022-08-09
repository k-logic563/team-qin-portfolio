import { useState } from 'react'
import type { AppProps } from 'next/app'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'

import { MainLayout } from '@/components/Layout/MainLayout'

import { themeConfigs } from '@/config/mantine'

import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...themeConfigs, colorScheme }}
      >
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp
