import Container from '@/components/container/container'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/sidebar'
import { AppNavbar } from '@/components/layout/navbar'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <Container>
        <AppSidebar />
        <div className='w-full'>
          <AppNavbar />
          <main>{children}</main>
        </div>
      </Container>
    </SidebarProvider>
  )
}
