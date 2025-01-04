import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getMonthAndYear = () => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() // 0-11
  const currentYear = currentDate.getFullYear()
  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1 // 0-11
  const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear

  return {
    currentMonth,
    currentYear,
    lastMonth,
    lastYear
  }
}

export const filterDataByMonth = <T extends { createdAt: string }>(
  items: T[],
  option: 'currentMonth' | 'lastMonth'
): T[] => {
  const { currentMonth, currentYear, lastMonth, lastYear } = getMonthAndYear()

  const month = option === 'currentMonth' ? currentMonth : lastMonth
  const year = option === 'currentMonth' ? currentYear : lastYear

  return items.filter((item) => {
    const itemDate = new Date(item.createdAt)
    return itemDate.getMonth() === month && itemDate.getFullYear() === year
  })
}
