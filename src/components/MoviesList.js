import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  const renderingMovies = Object.keys(movies).map((movieId) => (
    <li key={movieId}>
      <Link to={`/movies/${movieId}`}>{movies[movieId].title}</Link>
    </li>
  ));
  return <ul>{renderingMovies}</ul>;
}
export default MoviesList;