import crypto from  '@/data/crypto.json'
import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { auth } from '@/app/api/auth/auth'

const TableCrypto = async () => {
  const session = await auth()
  const userId=  session?.user?.email || ''
  return (
    <div className='w-full flex flex-col   gap-4 px-4'>
    <h1 className='w-full text-xl text-left'>Zastanów się... i mądrze wybierz kryptowaluty:</h1>
    <Table>
  <TableCaption>To koniec tabeli.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Ikona</TableHead>
      <TableHead>Symbol</TableHead>
      <TableHead className='max-sm:hidden'>Nazwa</TableHead>
      <TableHead>Cena</TableHead>
      <TableHead className='max-sm:hidden'>Zmiana 24h</TableHead>
      <TableHead>Akcja</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {crypto.map(el=>
    <TableRow key={el.id}>
      <TableCell><Image src={el.icon} alt={el.name} width={40} height={40} className='bg-white rounded-sm'/></TableCell>
      <TableCell>{el.symbol}</TableCell>
      <TableCell className='max-sm:hidden'>{el.name}</TableCell>
      <TableCell>{el.price}</TableCell>
      <TableCell className='max-sm:hidden'>{el['change(24h)']}</TableCell>
      <TableCell><Link href={`/crypto?id=${el.id}&user=${userId}`}><ShoppingCart size={28} className='hover:text-primary transition-colors duration-300' /></Link></TableCell> 
    </TableRow>
    )}
  </TableBody>
</Table>
</div>

     
  )
}

export default TableCrypto


