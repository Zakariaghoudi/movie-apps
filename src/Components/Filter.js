import './Filter.css';
import  { useState } from 'react';

function Filter({ onFilterChange }) {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
    onFilterChange({ title: e.target.value, rating: ratingFilter });
  };

  const handleRatingChange = (e) => {
    // Ensure rating is a number and between 0-5
    let value = e.target.value;
    if (value === '') {
      setRatingFilter('');
    } else {
      value = parseFloat(value);
      if (!isNaN(value) && value >= 0 && value <= 5) {
        setRatingFilter(value);
      }
    }
    onFilterChange({ title: titleFilter, rating: value === '' ? '' : value });
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by min rating (0-5)"
        value={ratingFilter}
        onChange={handleRatingChange}
        min="0"
        max="5"
        step="0.1"
      />
    </div>
  );
}

export default Filter;