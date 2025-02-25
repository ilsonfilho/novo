import { createContext, useContext, useState } from "react"

const ContextGlobal = createContext<any>(null)

const ProviderGlobal = ({ children }: any) => {
    const [cor, setCor] = useState('red')

    return (
        <ContextGlobal.Provider value={{ cor, setCor }}>
            {children}
        </ContextGlobal.Provider>
    )
}

const useContextGlobal = () => useContext(ContextGlobal)

export {
    ProviderGlobal,
    useContextGlobal
}