import './globals.css'
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const merriweather = Merriweather({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'M.P. Sambyal - Personal Profile',
  description: 'Personal profile of M.P. Sambyal from Jammu and Kashmir, known for social service and volunteer work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" />
      </head>
      <body className={`${inter.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  )
} 