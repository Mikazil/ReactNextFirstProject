import Link from 'next/link'
import './globals.css'
import InputOutput from '@/widgets/InputOutput/ui/InputOutput'

export default function Home() {
  return (
    <div className='m-10'>
      <Link href="/ShopList">Товары</Link>
      <InputOutput />
    </div>
  )
}
