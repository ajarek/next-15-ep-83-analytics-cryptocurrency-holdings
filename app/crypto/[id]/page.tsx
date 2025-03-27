import LineChartCrypto from '@/components/LineChartCrypto'
import React from 'react'
type Params = {
  id: string
}
const Crypto = ({ params }: { params: Params }) => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-4 '>
    <h1 className='text-xl  text-center'>Crypto {params.id}</h1>
    <div className='w-full grid grid-cols-2 gap-4 p-4 '>
      <div><LineChartCrypto/></div>
      <div>Crypto {params.id}</div>
    </div>



    </div>
  )
}

export default Crypto