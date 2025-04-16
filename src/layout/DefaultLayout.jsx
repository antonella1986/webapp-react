import { Outlet } from "react-router-dom"

function DefaultLayout() {

    return (
        <>
            <header>Header</header>
            <main><Outlet /></main>
            <footer>Footer</footer>
        </>
    )
}

export default DefaultLayout