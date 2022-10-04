import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const matching = useRouteMatch();
  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={matching.url}>
        <h3>Select a Movie from list</h3>
      </Route>
      <Route path={`${matching.url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
