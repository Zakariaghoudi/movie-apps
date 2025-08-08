import  { useState, useEffect } from 'react';
import './Carousel.css';
import {Rating} from '@mui/material';

const Carousel = ({ movies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // الانتقال التلقائي بين الشرائح
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
        }, 3000); // الانتقال كل 3 ثوانٍ

        // وظيفة التنظيف لمنع تسرب الذاكرة
        return () => clearInterval(interval);
    }, [movies.length]);

    // وظيفة الانتقال إلى الشريحة السابقة
    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? movies.length - 1 : prevIndex - 1
        );
    };

    // وظيفة الانتقال إلى الشريحة التالية
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % movies.length
        );
    };

    return (
        <div className="carousel-container">
            <div 
                className="carousel-slide" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {movies.map((movie) => (
                    <div className="slide-item" key={movie.id}>
                        <img src={movie.posterURL} alt={movie.title} />
                        <Rating
                        className="rating"
                         name="read-only"
                         value={movie.rating}
                         precision={0.5}
/>
                <div className="movie-title">{movie.title}</div>
                    </div>
                ))}
            </div>

             {/* <button className="prev-btn" onClick={goToPrevSlide}>❮</button>
            <button className="next-btn" onClick={goToNextSlide}>❯</button> */}
{/*
            <div className="carousel-dots">
                {movies.map((_, index) => (
                    <span 
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))} */}
            </div>
        
    );
};

export default Carousel;