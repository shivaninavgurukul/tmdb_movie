import React from "react";

const MovieModal = ({ movie, onClose }) => {
  return (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-container">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        {/* Display specific movie details */}
        <h2 className="movie-title">{movie.title || movie.name}</h2>
        <p>Rating: {movie.vote_average}</p>
        <p>Description: {movie.overview}</p>
        <p>Language: {movie.original_language}</p>
        {/* Additional content... */}
      </div>
    </div>
  );
};

export default MovieModal;
