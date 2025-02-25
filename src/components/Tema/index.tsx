import { useContextGlobal } from '../../contexts/GlobalContext'
import { MudarCor } from '../../utils/funcoes'

export const Tema = () => {
    const { cor } = useContextGlobal()

    return (
        <>
            <h1>TEMA - {cor}</h1>
            <button onClick={MudarCor}>RED</button>
            <button>GREEN</button>
            <button>BLUE</button>
        </>
    )
}