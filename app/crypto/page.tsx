'use client'
import LineChartCrypto from '@/components/LineChartCrypto'
import crypto from '@/data/crypto.json'
import { useCartStore } from '@/store/cartStore'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import SelectQuantity from '@/components/SelectQuantity'
import React, { use } from 'react'
import { useToast } from '@/hooks/use-toast'

const Crypto = ({  searchParams,}: {searchParams: Promise<{ id: string; user:string;  quantity: string }>
}) => {
  const { id, quantity, user } = use(searchParams)
  const cryptoId = crypto.find((el) => el.id === id)
  const { addItemToCart, items } = useCartStore()
  const router = useRouter()
  const { toast } = useToast()
  
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-4 '>
      <h1 className='text-xl  text-center'>Crypto {cryptoId?.name}</h1>
      <div className='w-full grid grid-cols-2 max-lg:grid-cols-1 gap-4 p-4 place-items-center '>
        <div className='w-full'>
          <LineChartCrypto
            chartData={cryptoId?.chartData}
            price0={cryptoId?.price0}
          />  
        </div>
        <div className='flex flex-col items-start justify-center gap-4 p-4 text-xl'>
          <div className='flex items-center gap-3'><span className='text-primary text-lg'>Symbol:</span>{cryptoId?.symbol}</div>
          <div className='flex items-center gap-3'><span className='text-primary text-lg'>Cena:</span>{cryptoId?.price}$</div>
          <div className='flex items-center gap-3'><span className='text-primary text-lg'>Zmiana 24h:</span>{cryptoId?.['change(24h)']}$</div>
          <div className='flex items-center gap-3'><span className='text-primary text-lg'>Zmiana 7d:</span>{cryptoId?.['change(7d)']}$</div>
          <div className='flex items-center gap-3'><span className='text-primary text-lg'>Wolumin 24h:</span>{cryptoId?.['Wol(24h)']}$</div>
          <div className='flex items-center gap-3'><span className='text-primary text-lg'>Kapitalizacja: </span>{cryptoId?.capitalization}</div>
          <SelectQuantity query='quantity' />

          <Button onClick={() =>{
          if (items.some((i) => i.id === cryptoId?.id)) {
            toast({
              variant: 'destructive',
              title: 'Ta waluta jest już w Twoim koszyku',
            })
            router.push('/cryptoList')
            return
          }    
           addItemToCart({
            id: cryptoId?.id ||'',
            name: cryptoId?.name || '',
            symbol: cryptoId?.symbol || '' ,
            icon: cryptoId?.icon || '' ,
            price: cryptoId?.price || '',
            currentRate: cryptoId?.currentRate || '',
            quantity: quantity || '1',
            user:user
          })
            router.push('/cryptoList')
          }
            }
            aria-label='Add to cart'
            >
            Dodaj do koszyka
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Crypto
