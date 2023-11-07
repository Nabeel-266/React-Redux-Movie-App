import "./movieDetail.scss";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncSelectedMovieOrSeriesDetails,
  getMovieOrSeriesDetails,
  removeSelectedMovieOrSeries,
} from "../../features/movies/movieSlice";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movieOrSeriesDetails = useSelector(getMovieOrSeriesDetails);

  useEffect(() => {
    dispatch(fetchAsyncSelectedMovieOrSeriesDetails(imdbID));

    return () => {
      dispatch(removeSelectedMovieOrSeries());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movieDetailsCont">
      {Object.keys(movieOrSeriesDetails).length === 0 ? (
        <h1>LOADING...</h1>
      ) : (
        <>
          <section className="containerLeft">
            <h1 className="movieTitle">{movieOrSeriesDetails.Title}</h1>

            <div className="movieAbout">
              <span>🌟 IMDB Ratings : {movieOrSeriesDetails.imdbRating}</span>
              <span>👍 IMDB Votes : {movieOrSeriesDetails.imdbVotes}</span>
              <span>🎥 Runtime : {movieOrSeriesDetails.Runtime}</span>
              <span>📅 Year : {movieOrSeriesDetails.Year}</span>
            </div>

            <p className="moviePlot">{movieOrSeriesDetails.Plot}</p>

            <div className="movieInfo">
              <div className="info">
                <span>Director</span>
                <span>{movieOrSeriesDetails.Director}</span>
              </div>

              <div className="info">
                <span>Writer</span>
                <span>{movieOrSeriesDetails.Writer}</span>
              </div>

              <div className="info">
                <span>Starring</span>
                <span>{movieOrSeriesDetails.Actors}</span>
              </div>

              <div className="info">
                <span>Genres</span>
                <span>{movieOrSeriesDetails.Genre}</span>
              </div>

              <div className="info">
                <span>Languages</span>
                <span>{movieOrSeriesDetails.Language}</span>
              </div>

              <div className="info">
                <span>Awards</span>
                <span>{movieOrSeriesDetails.Awards}</span>
              </div>

              <div className="info">
                <span>Released</span>
                <span>{movieOrSeriesDetails.Released}</span>
              </div>
            </div>
          </section>

          <section className="containerRight">
            <img
              src={movieOrSeriesDetails.Poster}
              alt="Poster"
              className="poster"
            />
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
