import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        //dai a tutti i figli isLoading, in modo che possano usarlo
        <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;
export { GlobalProvider };