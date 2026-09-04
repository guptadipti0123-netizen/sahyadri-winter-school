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
      { url: '/icon.png?v=2', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico?v=2' },
    ],
    apple: [
      { url: '/apple-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/icon.png?v=2'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
