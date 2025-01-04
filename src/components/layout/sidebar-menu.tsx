'use client'

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
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from '../ui/sidebar'
import { usePathname } from 'next/navigation'

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

const AppSidebarMenu = () => {
  const pathname = usePathname()
  const { open } = useSidebar()

  return (
    <SidebarGroup className='py-0'>
      <SidebarGroupContent>
        <SidebarGroupLabel>Management</SidebarGroupLabel>
        <SidebarMenu>
          {!open && (
            <SidebarMenuItem>
              <SidebarMenuButton asChild className='py-6'>
                <SidebarTrigger />
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
          {managementItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className='py-6'
                isActive={pathname === item.url}
              >
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
  )
}

export default AppSidebarMenu
