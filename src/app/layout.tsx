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
  title: 'M.P. Sambyal - Social Worker & Volunteer',
  description: 'Personal website for M.P. Sambyal, a dedicated social worker and volunteer from Samba District, Jammu and Kashmir.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#4F46E5',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 