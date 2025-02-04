import Image from 'next/image';
import Logo from '../src/logo.svg';
const logo = () => {
  return (
    <Image className=''
        src={Logo}
        alt="Logo"
        width={20}
    />
  )
}
export default logo
