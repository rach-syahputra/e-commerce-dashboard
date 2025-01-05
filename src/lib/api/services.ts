const BASE_URL = 'http://localhost:3004'

export const fetchAllUser = async () => {
  const res = await fetch(`${BASE_URL}/users`)

  return await res.json()
}

export const fetchAllProduct = async () => {
  const res = await fetch(`${BASE_URL}/products`)

  return await res.json()
}

export const fetchAllCategory = async () => {
  const res = await fetch(`${BASE_URL}/categories`)

  return await res.json()
}

export const fetchAllOrder = async () => {
  const res = await fetch(`${BASE_URL}/orders`)

  return await res.json()
}

export const fetchSingleData = async (
  data: 'users' | 'products' | 'orders' | 'categories',
  id: string
) => {
  const res = await fetch(`${BASE_URL}/${data}?id=${id}`)

  return await res.json()
}

export const fetchFilteredData = async (
  data: 'users' | 'products' | 'orders' | 'categories',
  filter?: {
    sort?: string
    page?: number
    limit?: number
    order?: string
  }
) => {
  const params = new URLSearchParams()

  if (filter?.sort) params.append('_sort', filter.sort)
  if (filter?.page) params.append('_page', filter.page.toString())
  if (filter?.limit) params.append('_limit', filter.limit.toString())
  if (filter?.order) params.append('_order', filter.order)

  const res = await fetch(`${BASE_URL}/${data}?${params.toString()}`)

  return await res.json()
}
