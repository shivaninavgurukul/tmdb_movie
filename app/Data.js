"use client"
import React, { useState, useEffect } from "react";
import MovieRow from "./Movie_row";
import MovieModal from "./MovieModal.js";
// import MovieModal from "./Movie_modal.js";

const Data = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([

    {id: 0,
      movieName: "Sanam Teri Kasam",
      movieYear: "2018",
      votes: 0,
      dislike_votes:0,
      duration: "2H 31M",
      genre:"Love Story",
      image: "sanam.jpg",
      description:"This movie depend on love,this movie one girl she is very inocent and his friend one boy ,he support her girl friend every time ." 
    },
    {
      id: 1,
      movieName: "Dear ZIndagi",
      movieYear: "2016",
      votes: 0,
      dislike_votes:0,
      duration: "2H 31M",
      genre: "Drama,Romance",
      image: "Dear Zindagi.png",
      description:"Kaira is a Cinematographer search of a perfect life her encounter with jug an unconventional thinker,helps her gain a new perspective on life." 
      },{
      
      id:2,
      movieName:" Brave",
      movieYear:"2012",
      votes:0,
      dislike_votes:0,
      duration:"1h 33msec",
      genre:"Adventuoos,comedy",
      image:"DEAR.png",
      description:"Determined to make her own path in life, princess,merida defies a custom thats brings chaos to her kingdom. Granted one wish,merida must rely on her bravery and her archery skills to undo a beastly curse "
               
},{
  id:3,
       movieName:"Moana",
       movieYear:"2016",
       votes:0,
       dislike_votes:0,
       duration:"1h 47sec",
       genre:"Adventurous,Comedy",
       image:"Dear1.png",
       description:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
id:4,
        movieName:"Mulan",
        movieYear:"1998",
        duration:"1h 27m",
        votes:0,
        dislike_votes:0,
        genre:"Adventurous,Comedy",
        image:"D1.png",
        description:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
id:5,
        movieName:"He Named Me Malala",
        movieYear:"2015",
        duration:"1h 20m",
        votes:0,
        dislike_votes:0,
        genre:"Biography, Documentary",
        image:"k5.png",
        description:"A Look At The Events Loading T The TAlban's Attack On pakistani Schoolgitl Malala Yousafzal For Speaking Out On Girl's Education, Followed By The Afternath,Incliuding Her Speech To The United Nations.. "
},{
id:6,
        movieName:"Soul Surfer",
        movieYear:"2011",
        duration:"1h 52minsec",
        votes:0,
        dislike_votes:0,
        genre:"Drama ,Biography,Family",
        image:"image 1 (1).png",
        description:"Teenage Srfer bethany hamilton overcomes THe Odds and Own fears of Returning to Thewater after losing her left Arm in a shark attack "
},{
id:7,
        movieName:"Bend It Like Beckham",
        movieYear:"2016",
        duration:"1h 47sec",
        votes:0,
        dislike_votes:0,
        genre:"Adventurous,Comedy",
        image:"Bend_it.jpeg",
        description:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
id:8,
        movieName:"Into The Wild",
        movieYear:"2016",
        duration:"1h 47sec",
        votes:0,
        dislike_votes:0,
        genre:"Adventurous,Comedy",
        image:"k2.png",
        description:"To save father death in the army.A young maiden secretly goes in his place and becomes one of china's greatest heroines in the process. "
},{
		id:9,
        movieName:"THe Pursuit Of Happyness",
        movieYear:"2006",
        duration:"1h 57m",
        votes:0,
        dislike_votes:0,
        genre:"Drama,Biography",
        image:"Pursuit_of_happyness.jpg",
        description:"A Strugling salesman takes custody of his son as he's posied to begin A life-changing professional Career. "
}

    // Rest of the movie objects...
  ]);

  const handleLike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((item) =>
        item.id === id ? { ...item, votes: item.votes + 1 } : item
      )
    );
  };

  const handleDislike = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((item) =>
        item.id === id ? { ...item, dislike_votes: item.dislike_votes + 1 } : item
      )
    );
  };

  const handleDelete = (id) => {
    setMovies((prevMovies) => prevMovies.filter((item) => item.id !== id));
  };

  const handleMovieClick = async (id) => {
    // Fetch movie details from the API using the movie ID
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }

      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      // Handle error (e.g., show an error message)
    }
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    sortMovies();
  }, [movies]); // Update the sorting whenever the movies state changes

  const sortMovies = () => {
    setMovies((prevMovies) =>
      [...prevMovies].sort((a, b) => b.votes - a.votes)
    );
  };

  return (
    <div>
      {movies.map((item) => (
        <MovieRow
          key={item.id}
          item={item}
          onDelete={handleDelete}
          onLike={handleLike}
          onDislike={handleDislike}
          onMovieClick={() => handleMovieClick(item.id)} // Pass the movie ID to the click handler
     
         />
      ))}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Data;
