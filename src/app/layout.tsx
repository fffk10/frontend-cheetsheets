import type { Metadata } from 'next'
import './globals.css'
import Provider from '@/app/provider'
import { fonts } from '@/app/fonts'
import NavBar from '@/app/components/nav-bar'

export const metadata: Metadata = {
  title: 'front-cheets',
  description: 'front-end cheetsheets',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body className={fonts.inter.className}>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
