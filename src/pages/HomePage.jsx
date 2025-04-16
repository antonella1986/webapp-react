import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setMovies(data)
        });
    }, []);

    return (
        <>
            <div className="p-5 mb-4 bg-light">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome, mate!</h1>
                    <p className="col-md-8 fs-4">
                        Here you can find some of the greates movies of all time with reviews by out users. Do you want to speak your mind? Add your own reviews!
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Go to the form
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {movies.map((movie) => (
                        <div className="col-md-4 mb-4" key={movie.id}>
                            <div className="card h-100">
                                <img 
                                    src={`http://localhost:3000/img/${movie.image}`} 
                                    alt={movie.title} 
                                    className="card-img-top"
                                    style={{ height: "600px", objectFit: "cover", width: "100%" }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.abstract}</p>
                                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}