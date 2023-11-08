import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react';






const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: "Saikat Mandal's portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
    <body suppressHydrationWarning={true} className={inter.className}>
   
       {children}

    </body>
  </html>
  )
}
