export default function Form() {

    return (

        <>
            <hr className="mt-5" />
            <h2 className="mt-5 mb-4">Add your review</h2>
            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" id="inputUsername" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputUsername" className="form-label">Title</label>
                    <input type="text" className="form-control" id="inputUsername" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your review</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputVote" className="form-label">Your vote</label>
                    <select id="inputVote" className="form-select">
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