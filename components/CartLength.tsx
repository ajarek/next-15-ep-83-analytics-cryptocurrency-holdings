'use client'
import React from 'react'
import { useCartStore } from '@/store/cartStore'

const CartLength = () => {
  const { items } = useCartStore()
  const cartLength = items.reduce((acc, item) => acc + (+item.quantity || 0), 0)
  return (
    <div className='absolute -right-3 top-0 w-6 h-6 rounded-full border border-foreground flex justify-center items-center '>
      {cartLength}
    </div>
  )
}

export default CartLength