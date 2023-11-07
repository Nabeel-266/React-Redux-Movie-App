import "./movieList.scss";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";

import MovieCard from "../movieCard/MovieCard";

function MovieList() {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  let renderMovies,
    renderSeries = "";

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

  renderSeries =
    series.Response === "True" ? (
      series.Search.map((eachSeries, index) => {
        return <MovieCard key={index} data={eachSeries} />;
      })
    ) : (
      <div className="seriesError">
        <h3>{series.Error}</h3>
      </div>
    );

  return (
    <>
      <section className="movieList">
        <div className="movieListingWrapper">
          <h2>Movies</h2>
          <div className="moviesContainer">{renderMovies}</div>
        </div>
      </section>

      <section className="seriesList">
        <div className="seriesListingWrapper">
          <h2>Series</h2>
          <div className="seriesContainer">{renderSeries}</div>
        </div>
      </section>
    </>
  );
}

export default MovieList;
