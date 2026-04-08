import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SwiftCraft - AI iOS App Generator',
  description: 'Turn app ideas into SwiftUI code. Describe your app, get production-ready Xcode projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
