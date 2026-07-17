import { createContext } from "react";

export const GlobalContext = createContext()


export const GlobalProvide = ({children})=>{
    const name1 ="Bharath Reddy"
    return (
        <GlobalContext.Provider value={name1}>
{children}
        </GlobalContext.Provider>
    )
}