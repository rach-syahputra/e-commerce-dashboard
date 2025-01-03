export interface IUserJson {
  id: string
  name: string
  email: string
  image: string
}

export interface IProductJson {
  id: string
  name: string
  description: string
  category: string
  image: string
  sizes: number[]
  price: number
  stock: number
}

export interface ICategoryJson {
  id: string
  title: string
}

export interface IOrderJson {
  id: string
  user_id: string
  total_amount: number
  status: 'pending' | 'paid' | 'shipped' | 'completed'
}
