import { somar, subtrair, multiplicar, dividir } from './utils/funcoes'

export default function App() {
  return (
    <>
      <h1>SISTEMA</h1>
      <h2>{somar(10, 2)}</h2>
      <h2>{subtrair(10, 2)}</h2>
      <h2>{multiplicar(10, 2)}</h2>
      <h2>{dividir(10, 2)}</h2>
    </>
  )
}