import type { Metadata } from 'next'
import {
  Lato,
  Montserrat,
  Open_Sans,
  Playfair,
  Poppins,
  Raleway,
  Roboto,
} from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Sidebar from '@/components/Sidebar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

const playfairDisplay = Playfair({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Analytics of Cryptocurrency holdings',
  description: 'Analytics of Cryptocurrency holdings',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='pl'
      suppressHydrationWarning
    >
      <body
        className={`${poppins.variable}
         ${roboto.variable} ${openSans.variable} 
         ${montserrat.variable} ${raleway.variable} 
         ${lato.variable} ${playfairDisplay.variable} 
          antialiased relative`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <div className='w-full  max-w-[1440px] mx-auto  flex justify-center items-start  min-h-screen bg '>
            <Sidebar />
            {children}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
