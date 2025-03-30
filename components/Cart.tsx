'use client'
import React from 'react'
import { useCartStore } from '@/store/cartStore'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Label } from './ui/label'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
const Cart = () => {
  const { items } = useCartStore()
  const cartLength = items.reduce((acc, item) => acc + (+item.quantity || 0), 0)
  return (<div className='w-full flex items-center gap-8'>
    <Link
      href='/cart'
      className='relative bg-secondary w-8 h-8 rounded-full flex justify-center items-center hover:border border-foreground  transition-all delay-200'
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {' '}
            <ShoppingCart
              color={items.length>0?'green':'red'}
              size={24}
              strokeWidth={1}
              aria-label='Koszyk '
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Koszyk</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className='absolute -right-4 -top-1 w-6 h-6 rounded-full border border-foreground flex justify-center items-center '>
      {cartLength}
    </div>
    </Link>
    <Label className='text-xl max-sm:hidden'>Koszyk</Label>
    </div>
    
  )
}

export default Cart