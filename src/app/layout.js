import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata = {
  title: 'Sahyadri Rural Connect',
  description: 'Understanding Real Bharat',
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
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg?v=3" type="image/jpeg" />
        <link rel="shortcut icon" href="/logo.jpg?v=3" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg?v=3" />
      </head>
      <body
        className={`${inter.variable} ${lora.variable} font-sans text-pine_teal selection:bg-mint_leaf selection:text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
