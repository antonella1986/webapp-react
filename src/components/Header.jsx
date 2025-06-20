import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-dark"
            >
                <div className="container">
                    <a className="navbar-brand" href="#"><strong>Movies' reviews</strong></a>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" href="#" aria-current="page">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}