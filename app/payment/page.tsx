import PaymentForm from '@/components/FormPayment'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import { Session } from 'next-auth'

const Payment = async () => {
  const session = await auth()
  const { user } = (session as Session) || {}

  if (!user) {
    redirect('/login')
  }

  return (
    <>
      <PaymentForm />
    </>
  )
}
export default Payment
