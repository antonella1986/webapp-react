import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    //isLoading è true perché all'inizio la pagina sta caricando
    const [isLoading, setIsLoading] = useState(true);

    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    return (
        //dai a tutti i figli isLoading, in modo che possano usarlo
        <GlobalContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;
export { GlobalProvider };