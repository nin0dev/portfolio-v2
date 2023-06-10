import '../styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'Nino Berber | Portfolio',
  description: 'French & Canadian based in Bordeaux, France. I am a Web enthusiast, specializing in development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html className="dark" lang="en">
        <body className="bg-white font-['Sora'] text-black dark:bg-lightDark dark:text-white">
          {children}
        </body>
      </html>
  )
}
