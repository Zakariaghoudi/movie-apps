import React, { useState } from 'react';
import './AddMovieForm.css'; // Import the new CSS

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, posterURL, rating: parseFloat(rating) };
    onAddMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <div className="add-movie-container">
      <form onSubmit={handleSubmit} className="add-movie-form">
        <h2>Add New Movie</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="posterURL">Poster URL</label>
          <input
            type="text"
            id="posterURL"
            placeholder="Poster URL"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating (0-5)</label>
          <input
            type="number"
            id="rating"
            placeholder="Rating (0-5)"
            value={rating}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || (parseFloat(value) >= 0 && parseFloat(value) <= 5)) {
                setRating(value);
              }
            }}
            min="0"
            max="5"
            step="0.1"
            required
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;