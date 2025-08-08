import  { useState, useEffect } from 'react';
import {  Routes, Route, useLocation } from 'react-router-dom';
import MovieDescription from './Components/MovieDescription';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import AddMovieForm from './Components/AddMovieForm';
import './App.css'; 
import Navber from './Components/Navber';
import Carousel from './Components/Carousel';

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
      type:"Drama"
    },
    {
      id: 2,
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
      rating: 4.4,
      trailerURL: 'https://www.youtube.com/embed/EXeTwQWrcwY',
      type:"Drama"
    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_FMjpg_UX1000_.jpg',
      rating: 3.7,
      trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E',
      type:"Sci-Fi"
    },
    {
      id: 4,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg',
      rating: 4.1,
      trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0',
      type:"Sci-Fi"
    },

  
    {
      id: 5,
      title: 'مدرسة المشاغبين',
      description: 'هي مسرحية كوميدية مقتبسة عن الفيلم البريطاني (إلى المعلم مع الحب ) عرضت في 20 أكتوبر 1971، من بطولة فرقة الفنانين المتحدين المصريين سعيد صالح، عادل إمام، يونس شلبي، أحمد زكي، حسن مصطفى، سهير البابلي وهادي الجيار، ألف المسرحية الكاتب المصري علي سالم.',
      posterURL: 'https://www.mobtada.com/resize?src=uploads/images/2020/04/15859880780.jpg&w=750&h=450&zc=0&q=70',
      rating: 2.5,
      trailerURL: 'https://www.youtube.com/embed/your_arabic_movie_trailer', // Replace with actual trailer
      type:"Comedy"
    },
    
  {
    id: 6,
    title: "Forrest Gump",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    posterURL: "https://tse2.mm.bing.net/th/id/OIP.4L_vNEKtfkb3z9layw1XXgHaJ3?w=700&h=933&rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.5,
    trailerURL: "https://www.youtube.com/embed/bLvqoHBptjg",
    type: "Drama"
  },
  {
    id: 7,
    title: "The Green Mile",
    description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    posterURL: "https://images.moviesanywhere.com/3875280af5270deacfc628d591b89847/ac6a8771-3fca-41a0-9be2-be20a14b983a.jpg",
    rating: 4.4,
    trailerURL: "https://www.youtube.com/embed/Ki4ZS5wO7qU",
    type: "Drama"
  },
  {
    id: 8,
    title: "Joker",
    description: "A mentally troubled stand-up comedian embarks on a downward spiral of social neglect, apathy, and betrayal, leading him to become a new kind of criminal.",
    posterURL: "https://tse1.mm.bing.net/th/id/OIP.bYfp-wydS6fE2hO1JMWsmgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.3,
    trailerURL: "https://www.youtube.com/embed/zAGVQLHvw7g",
    type: "Drama"
  },
  {
    id: 9,
    title: "Arrival",
    description: "A linguist is recruited by the military to assist in translating alien communications.",
    posterURL: "https://tse4.mm.bing.net/th/id/OIP.Ra8azy5MZgvIrX5MwNpNaAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.2,
    trailerURL: "https://www.youtube.com/embed/tFMoJt7wVjU",
    type: "Sci-Fi"

  },
  {
    id: 10,
    title: "The Matrix",
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    posterURL: "https://tse1.mm.bing.net/th/id/OIP.iuA840IRUnKlPBJzhFlq0gHaKj?rs=1&pid=ImgDetMain&o=7&rm=3",
    rating: 4.3,
    trailerURL: "https://www.youtube.com/embed/v9qI90d-Xv4",
    type: "Sci-Fi"

  },
  {
    id: 11,
    title: "Blade Runner 2049",
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for 30 years.",
    posterURL: "https://th.bing.com/th/id/R.5b5d0e90ff7cad6e87361362a4265b69?rik=AfsZf5zuWVn2%2bA&pid=ImgRaw&r=0",
    rating: 4.0,
    trailerURL: "https://www.youtube.com/embed/gCcx85zbxz4",
    type: "Sci-Fi"

  }
])
  const location=useLocation();
  const showNavbar= ! location.pathname.startsWith('/movie');
  const [typeFilter, setTypeFilter] = useState('All');
  const [filter, setFilter] = useState({ title: '', rating: '' });

  // Function to add a new movie
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]); // Add the new movie to the existing list
  };

  // Function to handle filter changes from the Filter component
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Function to handle type changes from the Navbar component
  const handleTypeChange = (type) => {
    setTypeFilter(type);
  };

  // Filter the movies based on title, rating, and type
  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const matchesRating = filter.rating === '' || movie.rating >= parseFloat(filter.rating);
    const matchesType = typeFilter === 'All' || movie.type === typeFilter;
    return matchesTitle && matchesRating && matchesType;
  });

  // Optional: Use useEffect to log changes or perform side effects
  useEffect(() => {
    console.log("Current filter:", filter);
  }, [filter]); // This effect runs whenever the filter state changes

  return (

  <div className="main-content-container"> {/* New container */}
    <div className="header">
      <h1>Screen<span>Time</span></h1>
          {showNavbar && <Navber onFilterChange={handleTypeChange} />}

    </div>

    {/* This is the area you want to control the layout for */}
    <div className="content-area">
      
            <Routes>
              <>
        <Route path="/" element= {
          <>
        <div className="filter-add-section">
              <Filter onFilterChange={handleFilterChange} />
              <AddMovieForm onAddMovie={handleAddMovie} />
              <Carousel movies={movies} />
            </div>
            <MovieList movies={filteredMovies} />
            </>
             } 
            />
            </>
           <Route path="/movie/:id" element={<MovieDescription movies={movies} />}
            />

      </Routes>
    </div>
    </div>
  );
}

export default App;
