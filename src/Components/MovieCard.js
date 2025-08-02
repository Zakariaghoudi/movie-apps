  import "./MovieCard.css";
import {Rating} from '@mui/material';
function MovieCard({ movie }) {
  const { title, description, posterURL, rating } = movie;

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} className="movie-card-poster" />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-description">{description}</p>
<div className="movie-card-rating" >
  {/* rating with material ui */}
  <Rating
  name="read-only"
  value={rating}
  precision={0.5}
  />
       </div>

      </div>
</div>
  )
}

export default MovieCard;
