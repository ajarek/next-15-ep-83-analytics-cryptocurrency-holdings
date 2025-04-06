import React from 'react'
import { auth } from '@/app/api/auth/auth'
import { getCrypto } from '@/lib/action'
import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import DeleteCrypto from '@/components/DeleteCrypto'

const Dashboard = async () => {
  const session = await auth()
  const data = await getCrypto()
  const dataUser = data?.filter((d) => d.user === session?.user?.email)
  const purchaseValue = await dataUser?.reduce(
    (acc, item) => acc + parseFloat(item.price) * parseFloat(item.quantity),
    0
  )
  const salesValue = await dataUser?.reduce(
    (acc, item) =>
      acc + parseFloat(item.currentRate) * parseFloat(item.quantity),
    0
  )
  const balanse = salesValue - purchaseValue

  return (
    <div className='w-full min-h-screen flex flex-col justify-start items-center gap-4 p-4 '>
      <h1 className='text-2xl  text-center'>
        Aktywa użytkownika:{' '}
        <span className='capitalize text-primary'>{session?.user?.name}</span>{' '}
      </h1>
      {dataUser && dataUser.length > 0 ? (
        <Table>
          <TableCaption
            className={`text-xl ${
              balanse >= 0 ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {balanse >= 0 ? 'Dochód to' : 'Strata to'} : {balanse.toFixed(2)} $
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='max-sm:hidden'>Ikona</TableHead>
              <TableHead>Symbol</TableHead>

              <TableHead className='max-sm:hidden'>Cena Zakupu</TableHead>
              <TableHead>Aktualna Cena</TableHead>
              <TableHead>Ilość</TableHead>
              <TableHead>Sprzedaj</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataUser?.map((el) => (
              <TableRow key={el.id}>
                <TableCell className='max-sm:hidden'>
                  <Image
                    src={el.icon}
                    alt={el.name}
                    width={40}
                    height={40}
                    className='bg-white rounded-sm'
                  />
                </TableCell>
                <TableCell>{el.symbol}</TableCell>

                <TableCell className='max-sm:hidden'>{el.price}</TableCell>
                <TableCell>{el.currentRate}</TableCell>
                <TableCell>{el.quantity}</TableCell>
                <TableCell>
                  <DeleteCrypto _id={el.id || ''} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className='text-center text-2xl text-red-500'>Brak Aktywów</p>
      )}
    </div>
  )
}

export default Dashboard
