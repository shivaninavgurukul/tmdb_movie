"use client"
import React from "react";
import Link from "next/link";

const MovieRow = ({ item, onLike, onDislike, onMovieClick }) => {
  return (
    <div className="row1_movie_row">
      <div className="image">
        <img src={item.image} alt={item.movieName} className="image" />
      </div>

      <div className="Discription">
        <h1 onClick={() => onMovieClick(item.id)}>{item.movieName}
            <Link href="/Movie_Details"/>
        </h1>
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
      </div>
    </div>
  );
};

export default MovieRow;

