import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([])
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setMovie(data)
            setReviews(data.reviews || [])
        });
    }, []);

    function printRating(vote) {
        const stars = [];
        const empty = [];

        for (let i = 0; i < vote; i++) {
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
        }
        for (let i = 0; i < 5 - vote; i++) {
            empty.push(<i key={i} className="bi bi-star"></i>);
        }
        return stars;
    }

    return (
        <>
        <div className="container">
            <div className="d-flex justify-content-center">
                <img 
                    src={`http://localhost:3000/img/${movie.image}`} 
                    alt={movie.title} 
                    className="card-img-top mb-5 mt-5 custom-shadow"
                    style={{ height: "550px", objectFit: "cover", width: "30%" }} 
                />
            </div>
            <h1>{movie.title}</h1>
            <p><strong>Description:</strong> {movie.abstract}</p>
            <p><strong>Year:</strong> {movie.release_year}</p>

            <h2 className="mt-5 mb-3">Reviews</h2>
            {reviews.length > 0 ? (
                movie.reviews.map((review) => (
                    <div className="card mb-4 mt-4" key={review.id}>
                        <div className="card-body">
                            <h4 className="card-title">{review.name}</h4>
                            <p className="card-text">{review.text}</p>
                            <p className="card-text"><strong>Vote: </strong> {printRating(review.vote)}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No reviews available for this movie.</p>
            )}
        </div>
        </>
    )
}