import Header from "./components/Header";
import Hero from "./components/Hero";
import Clientes from "./components/Clientes";
import Services from "./components/Services";

import Planilha from './assets/planilha.svg'
import Pessoas from './assets/pessoas.svg'
import Dinheiro from './assets/dinheiro.svg'
import Calendario from './assets/calendario.svg'


export default function App() {
  return (
    <main className="flex flex-col min-h-screen py-4">
      <Header />
      <Hero />
      <Clientes />
      <Services />
      
      <div className="flex flex-col py-12 bg-green-100 items-center justify-center">
        <div className="flex items-center gap-5">
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-1 items-center">
            <img src={Planilha} className="w-14" alt="" />
            <p className="font-medium">Projetos Realizados</p>
          </div>
          <h1 className="text-primary text-xl font-bold">250 +</h1>
        </div>
        <div className="w-[1px] h-44 bg-zinc-300">
        </div>



        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-1 items-center">
            <img src={Pessoas} className="w-14" alt="" />
            <p className="font-medium">Satisfação dos Clientes</p>
          </div>
          <h1 className="text-primary text-xl font-bold">85 %</h1>
        </div>
        <div className="w-[1px] h-44 bg-zinc-300">
        </div>



        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-1 items-center">
            <img src={Dinheiro} className="w-14" alt="" />
            <p className="font-medium">Levantado por Clientes</p>
          </div>
          <h1 className="text-primary text-xl font-bold">R$10M</h1>
        </div>
        <div className="w-[1px] h-44 bg-zinc-300">
        </div>



        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-1 items-center">
            <img src={Calendario} className="w-14" alt="" />
            <p className="font-medium">Anos no Mercado</p>
          </div>
          <h1 className="text-primary text-xl font-bold">2 anos</h1>
        </div>
        
        </div>
      </div>
    </main>
  )
}
