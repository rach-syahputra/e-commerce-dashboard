'use client'

import { ChevronDown, ChevronsLeftRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { useIsMobile } from '@/hooks/use-mobile'
import { useIsDesktop } from '@/hooks/use-desktop'
import { cn } from '@/lib/utils'
import { fetchAllUser } from '@/lib/api/services'
import { IUserJson } from '@/lib/types/json'
import { MonthType } from '@/lib/types/types'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from '@/components/ui/chart'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

type SalesChartProps = {
  className?: string
}

interface ISales {
  month: MonthType
  amount: number
}

const UsersChart = ({ className }: SalesChartProps) => {
  const isMobile = useIsMobile()
  const isDesktop = useIsDesktop()

  const [users, setUsers] = useState<Record<number, ISales[]>>({})
  const [existYears, setExistYears] = useState<number[]>([])
  const [selectedYear, setSelectedYear] = useState<number>(0)
  const [mobileChartDataIndex, setMobileChartDataIndex] = useState<0 | 1>(0)

  const chartConfig = {
    amount: {
      label: 'Total',
      color: 'hsl(var(--chart-1))'
    }
  } satisfies ChartConfig

  const getUsers = async () => {
    const res: IUserJson[] = await fetchAllUser()

    const months: MonthType[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    const usersByYear: Record<number, ISales[]> = {}
    const years: number[] = []

    res.forEach((item) => {
      // Find date, year and month of an order
      const date = new Date(item.createdAt)
      const year = date.getFullYear()
      const month = date.toLocaleDateString('en-US', {
        month: 'long'
      }) as MonthType

      // Add non-duplicate year of compteled order
      if (!years.includes(year)) years.push(year)

      // Initialize usersByYear data
      if (!usersByYear[year])
        usersByYear[year] = months.map((month) => ({ month, amount: 0 }))

      const existingMonthData = usersByYear[year].find(
        (data) => data.month === month
      )

      if (existingMonthData) {
        existingMonthData.amount += 1
      } else {
        usersByYear[year].push({ month, amount: 1 })
      }
    })

    setExistYears(years)
    setSelectedYear(years[years.length - 1])
    setUsers(usersByYear)
  }

  useEffect(() => {
    getUsers()
  }, [])

  // if (!selectedYear) return <SalesChartSkeleton className='col-span-3' />

  return (
    <Card className={cn('p-4 md:p-6', className)}>
      <CardHeader className='flex flex-row items-start justify-between p-0'>
        <CardTitle className='text-sm font-semibold'>Users Growth</CardTitle>
        <div className='flex items-center justify-center gap-2'>
          <Button
            variant='ghost'
            onClick={() =>
              setMobileChartDataIndex(mobileChartDataIndex === 0 ? 1 : 0)
            }
            className='md:hidden'
            asChild
          >
            <ChevronsLeftRight />
          </Button>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost'>
                {selectedYear} <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-fit min-w-0'>
              {existYears.length > 0 &&
                existYears.map((year) => (
                  <DropdownMenuItem
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className='p-4'
                  >
                    {year}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <ChartContainer
        config={chartConfig}
        className='h-[320px] min-h-[300px] w-full'
      >
        <BarChart
          accessibilityLayer
          data={
            isMobile && mobileChartDataIndex === 0
              ? users[selectedYear]?.slice(0, 6)
              : isMobile && mobileChartDataIndex === 1
                ? users[selectedYear]?.slice(6, 12)
                : users[selectedYear]
          }
          barSize={isMobile ? '12%' : '6%'}
          margin={{ left: 8, top: 16, right: 8, bottom: 8 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='month'
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          {isDesktop && (
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={70}
              tickFormatter={(value) => Number(value).toLocaleString('id-ID')}
              fontSize={10}
            />
          )}

          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey='amount' fill='var(--color-amount)' radius={2} />
        </BarChart>
      </ChartContainer>
    </Card>
  )
}

export default UsersChart
