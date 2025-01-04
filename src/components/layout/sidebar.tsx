import { Sidebar, SidebarContent } from '@/components/ui/sidebar'
import AppSidebarMenu from './sidebar-menu'

export function AppSidebar() {
  return (
    <Sidebar className='border-r'>
      <SidebarContent>
        <span className='flex h-14 select-none items-center px-4 text-xl font-bold'>
          E-COMMERCE
        </span>
        <AppSidebarMenu />
      </SidebarContent>
    </Sidebar>
  )
}
