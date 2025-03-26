import HeroSection from '@/components/HeroSection'
import crypto from  '@/data/crypto.json'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-4 p-8'>
      <HeroSection />
     <div className='w-full grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-4 place-items-center'>
      {crypto.map(el=>
        <div key={el.id} className='flex flex-col gap-1'>
        <Image src={el.icon} alt={el.name} width={200} height={200} className='bg-white rounded-lg'/>
         <h1 className='text-xl font-semibold'>{el.name}</h1>
        </div>  
      )}
     </div>
    </div>
  )
}
