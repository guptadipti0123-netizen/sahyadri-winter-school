import { Josefin_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#3a8c7e',
}

export const metadata = {
  title: 'Sahyadri Rural Connect — Experiential Learning & Rural Immersion',
  description: 'Understanding Real Bharat - Experiential Learning & Rural Immersion Fellowship in the Sahyadris.',
  icons: {
    icon: [
      { url: '/logo.jpg?v=3', type: 'image/jpeg' },
      { url: '/icon.png?v=3', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico?v=3' },
    ],
    apple: [
      { url: '/logo.jpg?v=3', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: ['/logo.jpg?v=3'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="icon" href="/logo.jpg?v=3" type="image/jpeg" />
        <link rel="shortcut icon" href="/logo.jpg?v=3" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg?v=3" />
      </head>
      <body
        className={`${josefin.variable} ${cormorant.variable} min-h-full flex flex-col font-sans bg-[#f5efe2] text-[#3e2410] selection:bg-[#3a8c7e]/25 selection:text-[#3e2410]`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

