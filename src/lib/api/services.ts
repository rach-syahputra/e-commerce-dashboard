const BASE_URL = 'http://localhost:3004'

export const fetchAllUser = async () => {
  const res = await fetch(`${BASE_URL}/users`, {
    cache: 'force-cache'
  })

  return await res.json()
}

export const fetchAllProduct = async () => {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: 'force-cache'
  })

  return await res.json()
}

export const fetchAllCategory = async () => {
  const res = await fetch(`${BASE_URL}/categories`, {
    cache: 'force-cache'
  })

  return await res.json()
}

export const fetchAllOrder = async () => {
  const res = await fetch(`${BASE_URL}/orders`, {
    cache: 'force-cache'
  })

  return await res.json()
}
