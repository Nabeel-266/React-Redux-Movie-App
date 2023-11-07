import "./home.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

import MovieList from "../movieList/MovieList";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, [dispatch]);

  return (
    <div>
      <MovieList />
    </div>
  );
}

export default Home;
