import { Link } from "react-router-dom";
import MovieCard from "./MovieCard"; // Add this import
import "./MovieList.css";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MovieCard movie={movie} /> {/* Render the MovieCard */}
        </Link>
      ))}
    </div>
  );
}
export default MovieList;
