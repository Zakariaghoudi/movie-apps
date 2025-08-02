import "./AddMovieForm.css";
import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!title || !description || !posterURL || !rating) {
      alert("Please fill in all fields!");
      return;
    }

    const newMovie = {
      id: Date.now(), // Simple unique ID
      title,
      description,
      posterURL,
      rating: parseFloat(rating), // Convert rating to a number
    };

    onAddMovie(newMovie); // Pass the new movie to the parent component

    // Clear form fields
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <h3>Add New Movie</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (0-5)"
        value={rating}
        onChange={(e) => {
          let value = e.target.value;
          if (value === "") {
            setRating("");
          } else {
            value = parseFloat(value);
            if (!isNaN(value) && value >= 0 && value <= 5) {
              setRating(value);
            }
          }
        }}
        min="0"
        max="5"
        step="0.1"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
