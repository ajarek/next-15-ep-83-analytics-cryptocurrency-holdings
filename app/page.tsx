import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-start items-center '>
      <div className='relative w-full flex justify-center rounded-lg overflow-hidden   '>
        <div className='relative w-full h-[598px]'>
          <Image
            src={'/images/cryptocurrencies.jpg'}
            alt='cryptocurrencies'
            width={1000}
            height={667}
            priority
            className='w-full h-full object-cover '
          />
        </div>
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-6 z-20 text-white '>
          <h1 className='text-5xl text-center  font-bold '>
            Zainwestuj w świat kryptowalut.
          </h1>
          <p className='text-xl text-center '>
            Buduj i powiększaj swój majątek.
          </p>
          <Link
            href={'/cryptoList'}
            className='w-fit bg-primary py-2 px-8 rounded-lg hover:bg-primary/90'
          >
            Start
          </Link>
        </div>
        <div className='absolute top-0   bg-black z-10 opacity-50  w-full h-full'></div>
      </div>
    </div>
  )
}
