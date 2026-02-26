import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Andrew Betbadal',
  description: 'Personal website of Andrew Betbadal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit`}>
        {children}
      </body>
    </html>
  )
}
