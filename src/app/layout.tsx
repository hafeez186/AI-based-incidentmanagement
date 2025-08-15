import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Management Tool - KB Assistant',
  description: 'AI-powered incident management system with knowledge base assistance',
  themeColor: '#3B82F6',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'IncidentAI',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <link
          rel="apple-touch-icon"
          href={`${basePath}/icons/icon-192x192.png`}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="IncidentAI" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('${basePath}/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
