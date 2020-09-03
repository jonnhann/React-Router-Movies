import React from 'react';
import MovieCard from './MovieCard'
import {Link} from 'react-router-dom'

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movieList.map(movie => (
        <Link to={`/movies/${movie.id}`}>
        <MovieCard key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}



export default MovieList;
