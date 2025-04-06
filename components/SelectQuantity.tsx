'use client'

import React, { useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'
import { Minus, Plus } from 'lucide-react'

interface SearchProps {
  query: string
}

const SelectQuantity = ({ query }: SearchProps) => {
  const [quantity, setQuantity] = React.useState(1)
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleQuantity = (term: string) => {
      const params = new URLSearchParams(searchParams)

      if (term) {
        params.set(`${query}`, term)
      } else {
        params.delete(`${query}`)
      }
      try {
        replace(`${pathname}?${params.toString()}`)
      } catch (error) {
        console.error('Failed to replace URL parameters:', error)
      }
    }

    handleQuantity(quantity.toString())
  }, [quantity])

  return (
    <div className='flex items-center gap-4'>
      <Button
        size={'icon'}
        className='rounded-full'
        onClick={() => setQuantity(quantity + 1)}
        aria-label='add'
      >
        <Plus />
      </Button>
      <p>{quantity}</p>
      <Button
        size={'icon'}
        className='rounded-full'
        onClick={() =>
          quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)
        }
        aria-label='remove'
      >
        <Minus />
      </Button>
    </div>
  )
}

export default SelectQuantity
