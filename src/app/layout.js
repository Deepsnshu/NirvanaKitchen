import './globals.css'

export const metadata = {
  title: 'Nirvana Niche Products Private Limited | Commercial Kitchen Solutions & Equipment',
  description:
    'Nirvana Niche Products Private Limited — Complete Commercial Kitchen Solutions. Design, supply, installation and support for hotels, restaurants, hospitals and institutions. ISO 9001:2015 certified. Proud to be part of Samvardhana Motherson.',
  keywords: 'commercial kitchen, kitchen equipment, nirvana kitchen, nirvana niche products, cooking range, bulk cooking, refrigeration, noida',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#232424',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen text-brand-charcoal bg-brand-white selection:bg-brand-red selection:text-white">
        {children}
      </body>
    </html>
  )
}

