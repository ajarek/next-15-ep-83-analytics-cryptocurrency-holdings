import { ModeToggle } from './dark-mode'
import AppLogo from './AppLogo'
import Logout from './Logout'
import { auth } from '@/app/api/auth/auth'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ChartNoAxesCombined, House , ScrollText, Users } from 'lucide-react'
import { Label } from './ui/label'
import Cart from './Cart'

const Sidebar = async () => {
  const session = await auth()
  return (
    <div className='  w-full min-h-screen max-sm:w-16 max-w-64   p-4 gap-6 flex flex-col items-start bg-primary'>
      <AppLogo />
      <div className='flex flex-col gap-4 items-center  justify-center  '>
        <div className='w-full flex items-center gap-8'>
          <Link
            href='/'
            className='bg-secondary w-8 h-8 rounded-full flex justify-center items-center hover:border-2 border-primary  transition-all delay-200'
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <House
                    size={24}
                    strokeWidth={1}
                    aria-label='Strona Główna'
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Strona Główna</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <Label className='text-xl max-sm:hidden'>Główna</Label>
        </div>


         {session &&
         <>
        <div className='w-full flex items-center gap-8'>
          <Link
            href='/dashboard'
            className='bg-secondary w-8 h-8 rounded-full flex justify-center items-center hover:border-2 border-primary  transition-all delay-200'
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {' '}
                  <ChartNoAxesCombined
                    size={24}
                    strokeWidth={1}
                    aria-label='Panel'
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Panel</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <Label className='text-xl max-sm:hidden'>Panel</Label>
        </div>
        <div className='w-full flex items-center gap-8'>
          <Link
            href='/cryptoList'
            className='bg-secondary w-8 h-8 rounded-full flex justify-center items-center hover:border-2 border-primary  transition-all delay-200'
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {' '}
                  <ScrollText 
                    size={24}
                    strokeWidth={1}
                    aria-label='Kryptowaluty'
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Kryptowaluty</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <Label className='text-xl max-sm:hidden'>Kryptowaluty</Label>
        </div>
        </>
}


        <div className='w-full flex items-center gap-8'>
          <Link
            href='/about'
            className='bg-secondary w-8 h-8 rounded-full flex justify-center items-center hover:border-2 border-primary  transition-all delay-200'
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {' '}
                  <Users
                    size={24}
                    strokeWidth={1}
                    aria-label='O Nas'
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>O Nas</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
          <Label className='text-xl max-sm:hidden'>O nas</Label>
        </div>
        <div className='w-full flex items-center gap-8'>
          <Logout session={session} />
          <Label className='text-xl max-sm:hidden'>
            {session ? 'Wyloguj' : 'Zaloguj'}
          </Label>
        </div>
        <div className='w-full flex items-center gap-8'>
          <ModeToggle />
          <Label className='text-xl max-sm:hidden'>Tło</Label>
        </div>
        <Cart/>
      </div>
    </div>
  )
}
export default Sidebar
