'use client'

import { useEffect, useState } from 'react'
import { Boxes, ShoppingCart, UsersRound } from 'lucide-react'

import {
  fetchAllOrder,
  fetchAllProduct,
  fetchAllUser
} from '@/lib/api/services'
import { IOrderJson, IProductJson, IUserJson } from '@/lib/types/json'
import { filterDataByMonth, formatToRupiah } from '@/lib/utils'
import DashboardSummaryCard from './dashboard-summary-card'

type SummaryType = {
  total: number
  growth: number | null
}

interface ISummary {
  user: SummaryType
  product: SummaryType
  order: SummaryType
  sale: SummaryType
}

const DashboardSummary = () => {
  const [summary, setSummary] = useState<ISummary>({
    user: {
      total: 0,
      growth: null
    },
    product: {
      total: 0,
      growth: null
    },
    order: {
      total: 0,
      growth: null
    },
    sale: {
      total: 0,
      growth: null
    }
  })

  const getUsers = async () => {
    const res: IUserJson[] = await fetchAllUser()

    // Find current month and last month data
    const currentMonthUsers = filterDataByMonth(res, 'currentMonth')
    const lastMonthUsers = filterDataByMonth(res, 'lastMonth')

    if (lastMonthUsers.length === 0) {
      return {
        total: res.length || 0,
        growth: currentMonthUsers.length > 0 ? 100 : 0
      }
    }

    return {
      total: res.length || 0,
      growth: Math.round(
        ((currentMonthUsers.length - lastMonthUsers.length) /
          lastMonthUsers.length) *
          100
      )
    }
  }

  const getProducts = async () => {
    const res: IProductJson[] = await fetchAllProduct()

    // Find current month data
    const currentMonthProducts = filterDataByMonth(res, 'currentMonth')

    return {
      total: res.length || 0,
      growth: currentMonthProducts.length
    }
  }

  const getOrders = async () => {
    const res: IOrderJson[] = await fetchAllOrder()

    // Find current month and last month data
    const currentMonthOrders = filterDataByMonth(res, 'currentMonth')
    const lastMonthOrders = filterDataByMonth(res, 'lastMonth')

    if (lastMonthOrders.length === 0) {
      return {
        total: res.length || 0,
        growth: currentMonthOrders.length > 0 ? 100 : 0
      }
    }

    return {
      total: res.length || 0,
      growth: Math.round(
        ((currentMonthOrders.length - lastMonthOrders.length) /
          lastMonthOrders.length) *
          100
      )
    }
  }

  const getSales = async () => {
    const res: IOrderJson[] = await fetchAllOrder()

    const totalSale = res
      .filter(
        (item) => item.status === 'completed' || item.status === 'shipped'
      )
      .reduce((total, item) => total + item.totalPrice, 0)

    // Find current month and last month data
    const currentMonthOrders = filterDataByMonth(res, 'currentMonth')
    const lastMonthOrders = filterDataByMonth(res, 'lastMonth')

    if (lastMonthOrders.length === 0) {
      return {
        total: totalSale || 0,
        growth: currentMonthOrders.length > 0 ? 100 : 0
      }
    }

    return {
      total: totalSale || 0,
      growth: Math.round(
        ((currentMonthOrders.length - lastMonthOrders.length) /
          lastMonthOrders.length) *
          100
      )
    }
  }

  const getSummaryData = async () => {
    try {
      const [user, product, order, sale]: SummaryType[] = await Promise.all([
        getUsers(),
        getProducts(),
        getOrders(),
        getSales()
      ])

      setSummary({
        user,
        product,
        order,
        sale
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getSummaryData()
  }, [])

  return (
    <div className='grid grid-cols-2 gap-4 lg:grid-cols-3'>
      <DashboardSummaryCard
        title='Total Sale'
        description={formatToRupiah(summary.sale.total)}
        growth={{ amount: summary.sale.growth || 0, format: 'percentage' }}
        icon={UsersRound}
      />
      <DashboardSummaryCard
        title='Total User'
        description={summary.user.total.toString()}
        growth={{ amount: summary.user.growth || 0, format: 'percentage' }}
        icon={UsersRound}
      />
      <DashboardSummaryCard
        title='Total Product'
        description={summary.product.total.toString()}
        growth={{ amount: summary.product.growth || 0, format: 'count' }}
        icon={Boxes}
      />
      <DashboardSummaryCard
        title='Total Order'
        description={summary.order.total.toString()}
        growth={{ amount: summary.order.growth || 0, format: 'percentage' }}
        icon={ShoppingCart}
      />
    </div>
  )
}

export default DashboardSummary
