import { useEffect } from 'react'
import { Card } from './components/Card'
import { Tema } from './components/Tema'
import { ProviderGlobal } from './contexts/GlobalContext'
import { somar, subtrair, multiplicar, dividir, MudarCor } from './utils/funcoes'

export default function App() {

  useEffect(() => {
    const valor = localStorage.getItem('cor')
    document.documentElement.style.cssText = `${valor}`
    console.log(valor)
  }, [])

  return (
    <ProviderGlobal>
      <h1>SISTEMA</h1>
      <h2>{somar(10, 2)}</h2>
      <h2>{subtrair(10, 2)}</h2>
      <h2>{multiplicar(10, 2)}</h2>
      <h2>{dividir(10, 2)}</h2>
      <button onClick={MudarCor} className='botao bg-ilson'>COR</button>
      <br />
      <button className='botao bg-lime-500'>TESTE</button>
      <Card />
      <Tema />
    </ProviderGlobal>
  )
}