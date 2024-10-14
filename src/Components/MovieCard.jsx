import React from 'react'
import spidy from '../assets/spidy.png'
import './MovieCard.css'

function MovieCard({Poster,Title,Year}) {
    return (
        <>
            <div className="card-container">
                <article className="card">
                    <img src={Poster} alt="MoviePoster" />
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