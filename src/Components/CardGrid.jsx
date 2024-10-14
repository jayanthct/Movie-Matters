import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './CardGrid.css';
import error from '../assets/Error.svg';
import PaginationRounded from './Pagination';

function CardGrid({ bool, list }) {
  const [page, setPage] = useState(1); // Current page
  const itemsPerPage = 4; // Number of items to display per page

  // Reset page to 1 when the list changes (e.g., a new search)
  useEffect(() => {
    setPage(1);
  }, [list]);

  // Calculate the slice of the list to show based on the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = list ? list.slice(startIndex, endIndex) : [];

  const handlePageChange = (event, value) => {
    setPage(value); // Set the new page when pagination is clicked
  };

  return (
    <>
      {/* Show error when the list is empty */}
      {!bool || (list && list.length > 0) ? (
        <div className="MovieGrid">
          {/* Ensure that the cards display even if there are less than 4 items */}
          {currentItems.length > 0 ? (
            currentItems.map((e, i) => (
              <MovieCard key={i} Poster={e.Poster} Title={e.Title} Year={e.Year}></MovieCard>
            ))
          ) : (
            <div className="errorcontainer">
              <img src={error} alt="ErrorIllustraion" />
              <div className="Ourcollabheadings">
                <span>Try</span><span id='secondword'>Again</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="errorcontainer">
          <img src={error} alt="ErrorIllustraion" />
          <div className="Ourcollabheadings">
            <span>Try</span><span id='secondword'>Again</span>
          </div>
        </div>
      )}

      {/* Always render pagination (even if list length is less than 4) */}
      {list && (
        <PaginationRounded
          count={Math.max(1, Math.ceil(list.length / itemsPerPage))} // Ensure at least 1 page
          page={page}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}

export default CardGrid;
