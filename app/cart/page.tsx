import CartTable from '@/components/CartTable'
import React from 'react'
import { redirect } from 'next/navigation'
import { Session } from 'next-auth'
import { auth } from '@/app/api/auth/auth'

const Cart = async () => {
  const session = await auth()
  const { user } = (session as Session) || {}

  if (!user) {
    redirect('/login')
  }

  return (
    <div className='w-full min-h-[calc(100vh-4rem)] pt-16 px-8 max-sm:px-4'>
    <CartTable/>
    </div>
  )
}

export default Cart