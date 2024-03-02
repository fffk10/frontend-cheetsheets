import Image from 'next/image'
import icon from '@/app/assets/logo.png'

export default function Logo() {
  return <Image src={icon} alt='logo' width={32} height={32} />
}
