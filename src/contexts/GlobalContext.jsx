import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    //isLoading è true perché all'inizio la pagina sta caricando
    const [isLoading, setIsLoading] = useState(true);
    //il loading inizia (true) quando la pagina viene caricata
    function startLoading() {
        setIsLoading(true);
    }
    //il loading termina (false) quando la pagina è stata caricata
    function stopLoading() {
        setIsLoading(false);
    }

    return (
        //dai a tutti i figli isLoading, in modo che possano usarlo
        <GlobalContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;
export { GlobalProvider };