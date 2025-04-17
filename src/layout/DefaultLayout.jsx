import { Outlet } from "react-router-dom"
import GlobalContext from "../contexts/GlobalContext"
import { useContext } from "react"
import Header from "../components/Header"

function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    if (isLoading) {
        return (
            <h1>...Loading</h1>
        )
    }

    return (
        <>
            <Header />
            <main><Outlet /></main>
            <footer>Footer</footer>
        </>
    )
}

export default DefaultLayout