import { createContext, useState } from "react";

const GlobalContext = createContext();

//creo il provider che dà accesso alle informazioni globali a tutti i figli
//"io, GlobalProvider, do accesso a tutti i figli il seguente codice"
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
        //dai a tutti i figli isLoading, in modo che possano usarlo E RENDERIZZARLO
        //"qualunque cosa c’era dentro <GlobalProvider>, mostramela qui, dentro al provider"
        //in questo modo, i componenti figli (es. <App />) saranno avvolti dal provider e potranno accedere ai dati condivisi (isLoading, ecc)
        //il provider è il padre di tutti i componenti figli
        <GlobalContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;
export { GlobalProvider };