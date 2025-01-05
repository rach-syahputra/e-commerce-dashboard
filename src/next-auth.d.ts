/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    role: string
    name: string
    email: string
    image: string
  }

  interface Session {
    user: {
      id: string
      role: string
      name: string
      email: string
      image: string
    }
  }

  interface JWT {
    id: string
    role: string
    name: string
    email: string
    image: string
  }
}
