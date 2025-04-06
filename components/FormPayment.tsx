'use client'

import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cartStore'
import { useToast } from '@/hooks/use-toast'
import { addCrypto } from '@/lib/action'

const FormPayment = () => {
  const { items, total, removeAll } = useCartStore()
  const router = useRouter()
  const { toast } = useToast()

  return (
    <div className=' w-full min-h-[calc(100vh-194px)]  flex flex-col justify-center max-sm:justify-start p-4 items-center  '>
      <form
        action={async () => {
          toast({
            variant: 'default',
            title: 'Zapłacono $' + total().toFixed(2),
            description: 'Dziękujemy za zakupy!',
          })
          addCrypto(items)
          removeAll()
          router.push('/dashboard')
        }}
        className='max-w-[480px] w-full   p-4  rounded-lg border-2 border-gray-400  shadow-sm shadow-gray-400'
      >
        <input
          type='hidden'
          name='id'
          value={items.map((item) => item.id).join(',')}
        />
        <div className='w-100%'>
          <Label htmlFor='cardNumber'>Do zapłaty</Label>
          <Input
            type='text'
            value={total().toLocaleString('en', {
              style: 'currency',
              currency: 'USD',
            })}
            readOnly
            required
          />
        </div>

        <div className='w-100%'>
          <Label htmlFor='cardNumber'>Numer Karty</Label>
          <Input
            type='text'
            placeholder='1234 5678 9012 3456'
            required
            pattern='^(?:\d{4} ){3}\d{4}$'
          />
        </div>
        <div className='w-100% '>
          <Label htmlFor='expiryDate'>Data ważności</Label>
          <Input
            type='text'
            placeholder='MM/YYYY'
            required
            pattern='^(0[1-9]|1[0-2])\/20[2-9][4-9]$'
          />
        </div>

        <div className='w-100%'>
          <Label htmlFor='cvv'>CVV</Label>
          <Input
            type='text'
            placeholder='123'
            required
            pattern='^[0-9]{3}$'
          />
        </div>

        <div className='w-full flex justify-end  mt-4'>
          <Button
            type='submit'
            aria-label='I order and pay'
            className=''
          >
            Płacę
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormPayment
