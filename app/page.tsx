import HeroSection from '@/components/HeroSection'
import TableCrypto from '@/components/TableCrypto'

export default function Home() {
  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col justify-center items-center gap-4 '>
      <HeroSection />
      <TableCrypto/>
    </div>
  )
}
