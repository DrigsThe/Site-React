import { Button } from "./Button";
import HeroImg from '../assets/hero.svg'

const Hero = () => {
    return ( 
        <div className="flex w-full items-center justify-between mt-14 px-32">
        <div className="flex flex-col w-[440px] gap-4">
          <h1 className="text-4xl font-semibold">Aumente a fidelidade e a satisfação de seus clientes.</h1>
          <span className="text-md">Ajudamos empresas como a sua a conquistar mais clientes, se destacar dos concorrentes e ganhar mais dinheiro.</span>

          <div className="mt-12">
            <Button title="Comece Já" size="md"/>
          </div>
        </div>

        <img src={HeroImg} className="w-[35rem]" alt="" />
      </div>
     );
}
 
export default Hero;