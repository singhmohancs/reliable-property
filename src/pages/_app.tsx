import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { ConfigProvider } from 'antd'
import { THEME_CONFIG } from '@/theme/constants'
import ProtectedLayout from '@/component/Layout'

import '@/style/theme.scss'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {}, [])

  return (
    <ConfigProvider theme={{ token: { ...THEME_CONFIG } }}>
      <ProtectedLayout>
        <Component {...pageProps} />
      </ProtectedLayout>
    </ConfigProvider>
  )
}
