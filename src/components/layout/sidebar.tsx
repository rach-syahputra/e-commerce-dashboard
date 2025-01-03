import Link from 'next/link'
import {
  Boxes,
  ChartColumnDecreasing,
  LayoutDashboard,
  ShoppingCart,
  SquareChartGantt,
  StretchHorizontal,
  UserRound
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'

const managementItems = [
  {
    title: 'Dashboard',
    url: '/',
    icon: LayoutDashboard
  },
  {
    title: 'Users',
    url: '/users',
    icon: UserRound
  },
  {
    title: 'Products',
    url: '/products',
    icon: Boxes
  },
  {
    title: 'Categories',
    url: '/categories',
    icon: StretchHorizontal
  },
  {
    title: 'Orders',
    url: '/orders',
    icon: ShoppingCart
  },
  {
    title: 'Analytics',
    url: '/analytics',
    icon: ChartColumnDecreasing
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: SquareChartGantt
  }
]

export function AppSidebar() {
  return (
    <Sidebar className='border-r'>
      <SidebarContent>
        <span className='flex h-14 select-none items-center px-4 text-xl font-bold'>
          E-COMMERCE
        </span>
        <SidebarGroup className='py-0'>
          <SidebarGroupContent>
            <SidebarGroupLabel>Management</SidebarGroupLabel>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className='py-6'>
                    <Link href={item.url} aria-label={`${item.title} page`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
