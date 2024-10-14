import React from 'react'
import unavailable from '../assets/nullposter.png'
import './MovieCard.css'

function MovieCard({Poster,Title,Year}) {
    return (
        <>
            <div className="card-container">
                <article className="card">
                    <img src={Poster=='N/A'?(unavailable):Poster} alt="MoviePoster" />
                    <div className="card-data">
                        <h3>{Title}</h3>
                        <p>{Year}</p>
                    </div>
                </article>

            </div>

        </>
    )
}

export default MovieCard