import React from 'react'
import MovieCard from './MovieCard'
import './CardGrid.css'
import error from '../assets/Error.svg'


function CardGrid({bool,list }) {
  return (
    <>
      {

       !bool||list&&list.length>0 ? (<div className="MovieGrid">
          {
            list && list.map((e, i) =>
            (
              <MovieCard key={i} Poster={e.Poster} Title={e.Title} Year={e.Year}></MovieCard>
            )
            )
          }
        </div>) : (<div className="errorcontainer">
          <img src={error} alt="ErrorIllustraion" />
          <div className="Ourcollabheadings">
            <span>Try</span><span id='secondword'>Again</span>

          </div>
        </div>)
      }
    </>
  )
}

export default CardGrid