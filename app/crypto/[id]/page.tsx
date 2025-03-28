import LineChartCrypto from '@/components/LineChartCrypto'
import React from 'react'
import crypto from '@/data/crypto.json'

type Params = {
  id: string
}

const Crypto = ({ params }: { params: Params }) => {
  const cryptoId = crypto.find((el) => el.id === params.id)
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-4 '>
      <h1 className='text-xl  text-center'>Crypto {cryptoId?.name}</h1>
      <div className='w-full grid grid-cols-2 gap-4 p-4 '>
        <div>
          <LineChartCrypto
            chartData={cryptoId?.chartData}
            price0={cryptoId?.price0}
          />
        </div>
        <div className='flex flex-col gap-4 p-4 text-xl'>
          <div>Symbol: {cryptoId?.symbol}</div>
          <div>Cena: {cryptoId?.price}$</div>
          <div>Zmiana 24h: {cryptoId?.['change(24h)']}$</div>
          <div>Zmiana 7d: {cryptoId?.['change(7d)']}$</div>
        </div>
      </div>
    </div>
  )
}

export default Crypto
