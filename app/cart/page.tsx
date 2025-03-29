'use client'

import React from 'react'
import { useCartStore } from '@/store/cartStore'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Cart = () => {
  const { items, total, removeItemFromCart } = useCartStore()
  const router = useRouter()

  return (
    <div className='min-h-[calc(100vh-4rem)] pt-16 px-8 max-sm:px-4'>
      {items.length > 0 ? (
        <Table>
          <TableCaption className='w-full text-right text-2xl font-bold space-y-4 '>
            <div>Razem do zapłaty: ${total().toFixed(2)}</div>
            <Button
              onClick={() => router.push('/payment')}
              className='text-xl'
              aria-label='Zamawiam i płacę'
            >
              Zamawiam i płacę  
            </Button>
          </TableCaption>
          <TableHeader>
            <TableRow className=' border-b border-primary'>
              <TableHead>Ikona</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead className='max-sm:hidden'>Nazwa</TableHead>
              <TableHead>Ilość</TableHead>
            
              <TableHead className='max-sm:hidden'>Cena</TableHead>
              <TableHead>Wartość</TableHead>
              <TableHead className='text-center'>Akcja</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={32}
                    height={32}
                    className='rounded-full'
                    />
                </TableCell>
                <TableCell>{item.symbol}</TableCell>
                <TableCell className='max-sm:hidden'>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                
                <TableCell className=''>
                  ${(+item.price).toFixed(2)}
                </TableCell>
                <TableCell>
                  ${(+item.price * +item.quantity).toFixed(2)}
                </TableCell>
                <TableCell className='text-center'>
                  <button onClick={() => removeItemFromCart(item.id)} aria-label='Remove item from cart'>
                    ❌
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className='text-center text-2xl text-red-500'>Twój koszyk jest pusty!</p>
      )}
    </div>
  )
}

export default Cart