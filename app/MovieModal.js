// import React from "react";

// const MovieModal = ({ movie, onClose }) => {
//   return (
//     <div>
//       <div className="overlay" onClick={onClose}></div>
//       <div className="modal-container">
//         <span className="close-btn" onClick={onClose}>
//           &times;
//         </span>
//         {/* Display specific movie details */}
//         <h2 className="movie-title">{movie.title || movie.name}</h2>
//         <p>Rating: {movie.vote_average}</p>
//         <p>Description: {movie.overview}</p>
//         <p>Language: {movie.original_language}</p>
//         {/* Additional content... */}
//       </div>
//     </div>
//   );
// };

// export default MovieModal;


import React from "react";

const MovieModal = ({ movie, onClose }) => {
  return (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div  className="modal-container" style={{height:'auto'}}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>

        {/* Display specific movie details */}
        <h2 className="movie-title">{movie.title || movie.name}</h2>

        {/* Table for movie details */}
        <table>
          <tbody>
            <tr>
              <td>Name :   </td>
              <td>{movie.title || movie.name}</td>
            </tr>
            <tr>
              <td>Rating :  </td>
              <td>{movie.vote_average}</td>
            </tr>
            <tr>
              <td>Description:  </td>
              <td>{movie.overview}</td>
            </tr>
            <tr>
              <td>Language:  </td>
              <td>{movie.original_language}</td>
            </tr>
            <tr>
              <td>Popularity :  </td>
              <td>{movie.popularity}</td>
            </tr>
            <tr>
              <td>Release_Date:</td>
              <td>  {movie.release_date}</td>
            </tr>
            {/* Add more rows for additional details */}
          </tbody>
        </table>

        {/* Additional content... */}
      </div>
    </div>
  );
};

export default MovieModal;
