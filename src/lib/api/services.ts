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
