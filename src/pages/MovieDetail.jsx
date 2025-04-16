import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setMovie(data)
        });
    }, []);

    return (
        <>
            <h1>{movie.title}</h1>
            <p>Year: {movie.year}</p>
            <p>Description: {movie.description}</p>
        </>
    )
}