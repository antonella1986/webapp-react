import { useState, useEffect, useContext } from 'react'
//uso useParams per recuperare i parametri dinamici presenti nell'URL (mi serve l'id del film)
import { useParams } from 'react-router-dom'
import Form from '../components/Form';

export default function MovieDetail() {
    //recupero l'id del film tramite la funzione useParams
    const { id } = useParams();
    const { setIsLoading } = useContext(GlobalContext);
    //recupero le informazioni dei film e delle recensioni già presenti
    //con ([]) mi aspetto un array, una lista di cose (l'elenco dei film). con ({}) mi aspetto un singolo oggetto ( e quindi i dettagli del singolo film)
    const [movie, setMovie] = useState({})
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:3000/movies/${id}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            //i dati (del film) vengono salvati nello stato "movie"
            setMovie(data)
            //se un film non ha recensioni, non ricevo undefined, ma un array vuoto, così non si rompe il map() nel render
            setReviews(data.reviews || []);
            setIsLoading(false);
        });
    //mi serve che i dati vengano caricati solo una volta, ovvero al caricamento della pagina
    }, [id, setIsLoading]);

    function printRating(vote) {
        const stars = [];
        const empty = [];
        //key={i} serve a React per identificare ogni elemento in una lista e aggiornarli correttamente se qualcosa cambia
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
                    style={{ height: "550px", objectFit: "cover", width: "40%" }} 
                />
            </div>
            <h1>{movie.title}</h1>
            <p><strong>Description:</strong> {movie.abstract}</p>
            <p><strong>Year:</strong> {movie.release_year}</p>

            <h2 className="mt-5 mb-3">Reviews</h2>
            {/* se è vero che la lunghezza di reviews è maggiore di 0, allora stampa le recensioni */}
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

            <Form />
        </div>
        </>
    )
}