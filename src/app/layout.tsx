import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChosenX - Professional Marketing Solutions',
  description: 'Empowering businesses and individuals to reach their full potential through innovative solutions and exceptional service.',
  keywords: 'marketing, business solutions, professional services, consulting',
  authors: [{ name: 'ChosenX Team' }],
  openGraph: {
    title: 'ChosenX - Professional Marketing Solutions',
    description: 'Empowering businesses and individuals to reach their full potential through innovative solutions and exceptional service.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
