import { useEffect, useState } from "react";

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
            <h1>Home page</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        {movie.title} ({movie.year})
                    </li>
                ))}
            </ul>

        </>
    )
}