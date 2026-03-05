import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PGM Developers | Premium Construction & Real Estate',
  description:
    'PGM Developers — delivering excellence in construction and real estate development. Building landmarks that define skylines.',
  keywords: 'construction, real estate, development, PGM Developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-light text-dark overflow-x-hidden">{children}</body>
    </html>
  )
}
