import { Inter } from 'next/font/google'
import { Rubik } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const fonts = {
  inter,
  rubik,
}
