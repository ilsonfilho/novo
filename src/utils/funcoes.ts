export const somar = (a: number, b: number) => a + b
export const subtrair = (a: number, b: number) => a - b
export const multiplicar = (a: number, b: number) => a * b
export const dividir = (a: number, b: number) => a / b

// export const Cor = () => '#' + Math.floor(Math.random() * 12345678).toString(16)
export const Cor = () => `#${Math.floor(Math.random() * 0xFFFFFF << 0).toString(16)}`

export const CorFonte = (color: string) => parseInt(color.replace('#', ''), 16) > 0xffffff / 2 ? '#000' : '#fff'

export const MudarCor = () => {
    const cor1 = Cor()
    const cor2 = CorFonte(cor1)

    document.documentElement.style.cssText = `--color-cor1: ${cor1};--color-cor2: ${cor2}`
    localStorage.setItem('cor', `--color-cor1: ${cor1};--color-cor2: ${cor2}`)
    console.log('COR 1:', cor1)
    console.log('COR 2:', cor2)
}