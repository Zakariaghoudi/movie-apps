import  { useState, useEffect } from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import MovieDescription from './Components/MovieDescription';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import AddMovieForm from './Components/AddMovieForm';
import './App.css'; 


function App() {

  // Sample initial movie data

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://i.pinimg.com/736x/a2/e4/66/a2e466a63989f844038cbf1ec58175fc.jpg',
      rating:4,
      trailerURL: 'https://www.youtube.com/embed/6hB3S9bIaco',
    
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
      rating: 4.4,
      trailerURL: 'https://www.youtube.com/embed/EXeTwQWrcwY',

    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_FMjpg_UX1000_.jpg',
      rating: 3.7,
      trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E',

    },
    {
      id: 4,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg',
      rating: 4.1,
      trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },

  
    {
      id: 5,
      title: 'مدرسة المشاغبين',
      description: 'هي مسرحية كوميدية مقتبسة عن الفيلم البريطاني (إلى المعلم مع الحب ) عرضت في 20 أكتوبر 1971، من بطولة فرقة الفنانين المتحدين المصريين سعيد صالح، عادل إمام، يونس شلبي، أحمد زكي، حسن مصطفى، سهير البابلي وهادي الجيار، ألف المسرحية الكاتب المصري علي سالم.',
      posterURL: 'https://www.mobtada.com/resize?src=uploads/images/2020/04/15859880780.jpg&w=750&h=450&zc=0&q=70',
      rating: 2.5,
      trailerURL: 'https://www.youtube.com/embed/your_arabic_movie_trailer', // Replace with actual trailer

    },
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  // Function to add a new movie
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]); // Add the new movie to the existing list
  };

  // Function to handle filter changes from the Filter component
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filter the movies based on title and rating
  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const matchesRating = filter.rating === '' || movie.rating >= parseFloat(filter.rating);
    return matchesTitle && matchesRating;
  });

  // Optional: Use useEffect to log changes or perform side effects
  useEffect(() => {
    console.log("Current filter:", filter);
  }, [filter]); // This effect runs whenever the filter state changes

  return (
    <Router>
    <div className="App">
      <h1>Favorite Movies & TV Shows</h1>
    <Routes>
      <Route
          path='/'
          element= {
            <>
      <div className="filter-add-section">
         <AddMovieForm onAddMovie={handleAddMovie} />
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <MovieList movies={filteredMovies} />
      </>
          }
          />
     <Route
            path="/movie/:id"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
