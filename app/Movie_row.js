
import React, { useState } from "react";
import MovieModal from "./MovieModal";

const MovieRow = ({ item, onLike, onDislike, onMovieClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="row1_movie_row">
      <div className="image">
        <img src={item.image} alt={item.movieName} className="image" />
      </div>

      <div className="Discription">
      <h1 onClick={() => onMovieClick(item.movieName)}>{item.movieName}</h1>
    
        <div className="action-row">
          <img
            className="like"
            src="Icon - Like.png"
            onClick={() => onLike(item.id)}
            alt="Like"
          />
          <div className="votes">{item.votes}</div>
          <img
            className="dislike"
            src="Vector.png"
            onClick={() => onDislike(item.id)}
            alt="Dislike"
          />
          <div className="votes">{item.dislike_votes}</div>
        </div>
        <p>{`${item.movieYear} | ${item.duration} | ${item.genre}`}</p>
        <h>Description</h>
        <p>{item.description}</p>

        {/* Modal */}
        {isModalOpen && (
          <MovieModal
            movie={{
              title: item.movieName,
              vote_average: item.votes, // or some other rating value
              overview: item.description,
              original_language: "English", // or the actual language value
            }}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default MovieRow;
