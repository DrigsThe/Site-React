import Logo from '../assets/logo.svg'
import { Button } from './Button';

const Header = () => {
    return ( 
        <header className="flex items-center justify-between py-5 px-32">
        <img src={Logo} alt="" />

        <div className='flex items-center gap-8'>
          <a href="#">Início</a>
          <a href="#services">Serviços</a>
          <a href="#portfolio">Nosso Portfolio</a>
          <Button title='Fale conosco'/>
        </div>
      </header>
     );
}
 
export default Header;