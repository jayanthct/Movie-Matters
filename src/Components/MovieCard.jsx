import React from 'react'
import spidy from '../assets/spidy.png'
import './MovieCard.css'

function MovieCard(props) {
    return (
        <>
            <div className="card-container">
                <article className="card">
                    <img src={spidy} alt="MoviePoster" />
                    <div className="card-data">
                        <h3>{props.Title}</h3>
                        <p>{props.year}</p>
                        <p>{props.director}</p>
                    </div>
                </article>

            </div>

        </>
    )
}

export default MovieCard