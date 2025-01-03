import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/components/provider/theme-provider'
import Container from '@/components/container/container'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/sidebar'
import { AppNavbar } from '@/components/layout/navbar'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'E-commerce Dashboard',
  description: 'E-commerce Dashboard.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning className={`${sora.variable}`}>
      <body className='font-[family-name:var(--font-sora)] antialiased'>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <Container>
              <AppSidebar />
              <div className='w-full'>
                <AppNavbar />
                <main>{children}</main>
              </div>
            </Container>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
