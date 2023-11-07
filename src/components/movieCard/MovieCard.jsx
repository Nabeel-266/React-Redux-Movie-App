import "./movieCard.scss";
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  // console.log(data);
  return (
    <Link to={`/movie/${data.imdbID}`} style={{ textDecoration: "none" }}>
      <div className="cardItem">
        <div className="cardWrapper">
          <div className="cardTopSide">
            <img className="moviePoster" src={data.Poster} alt="Movie-Poster" />
          </div>
          <div className="cardBottomSide">
            <h4 className="movieName">{data.Title}</h4>
            <p className="movieYear">{data.Year}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
