import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

import MovieCard from "../movieCard/MovieCard";

function MovieList() {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movieError">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movieList">
      <div className="movieListingWrapper">
        <h2>Movies</h2>
        <div className="moviesContainer">{renderMovies}</div>
      </div>
    </div>
  );
}

export default MovieList;
