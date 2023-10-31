import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Providers from './components/Providers'
import Navbar from './components/Navbar'
import { Toaster } from './components/ui/Toast'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("bg-white text-slate-900 antialiased", inter.className)}>
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased' >

        <Providers>
          <Navbar/>
        {children}
        <Toaster position='bottom-right'/>
        </Providers>
        </body>
    </html>
  )
}
