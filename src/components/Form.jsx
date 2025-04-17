import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Form() {
    const { id } = useParams(); //ottengo l'id del film dall'URL
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [vote, setVote] = useState("");

    
    function handleSubmit(e) {
        e.preventDefault();

        const reviewData = {
            name,
            text,
            vote
        };
        console.log(reviewData);

        fetch(`http://localhost:3000/movies/${id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
        .then((res) => {
            if (res.ok) {
                alert('Review added successfully');
            } else {
                alert('Error adding review');
            }
        })
        .catch((err) => {
            console.error('Error adding review:', err);
        });
    }


    return (

        <>
            <hr className="mt-5" />
            <h2 className="mt-5 mb-4">Add your review</h2>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="inputUsername" className="form-label">Your name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputUsername"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputUsername" className="form-label">Your review</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputUsername"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputVote" className="form-label">Your vote</label>
                    <select
                        id="inputVote"
                        className="form-select"
                        value={vote}
                        onChange={(e) => setVote(e.target.value)}
                    >
                    <option selected>Choose your rating</option>
                        <option className="bi-star-fill" value="1">★☆☆☆☆</option>
                        <option className="bi-star-fill" value="2">★★☆☆☆</option>
                        <option className="bi-star-fill" value="3">★★★☆☆</option>
                        <option className="bi-star-fill" value="4">★★★★☆</option>
                        <option className="bi-star-fill" value="5">★★★★★</option>
                    </select>
                </div>
                <div className="col-12 mt-5">
                    <button type="submit" className="btn btn-primary">Submit your vote</button>
                </div>
            </form>  
        </>
    )
}