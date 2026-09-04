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
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
