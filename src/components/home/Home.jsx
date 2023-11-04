import "./home.scss";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

import MovieList from "../movieList/MovieList";

const MOVIES_API_URL = `https://www.omdbapi.com/?apikey=f5b2957d`;

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${MOVIES_API_URL}&s=harry&type=movie`
        );
        // const data = JSON.stringify(response.data.Search[0].Title);

        // console.log(`${data}`);
        dispatch(addMovies(response.data));
      } catch (error) {
        console.log(`The error from MOVIE API: ${error.message}`);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList />
    </div>
  );
}

export default Home;
