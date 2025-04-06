import React from 'react'
import HeroSection from '@/components/HeroSection'
import TableCrypto from '@/components/TableCrypto'
import { redirect } from 'next/navigation'
import { Session } from 'next-auth'
import { auth } from '@/app/api/auth/auth'
const CryptoList = async () => {
  const session = await auth()
  const { user } = (session as Session) || {}

  if (!user) {
    redirect('/login')
  }
  return (
    <div className='w-full min-h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-4 '>
      <HeroSection />
      <TableCrypto />
    </div>
  )
}

export default CryptoList
