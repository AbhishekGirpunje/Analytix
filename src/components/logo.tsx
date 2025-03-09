// Assets

import { favicon, logo } from "../assets"

type LogoProps = {
    variant?: 'default' | 'icon';
}

const Logo = ({variant='default'}: LogoProps) => {
  return (
    <a href="" className="">
        {variant == 'default' && (
          <img src={logo} alt="Analytix log" width={150} height={31} />  
        )}

{variant == 'icon' && (
          <img src={favicon} alt="Analytix icon" width={31} height={32} />  
        )}
    </a>
  )
}

export default Logo
