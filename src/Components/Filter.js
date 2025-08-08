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
    onFilterChange({ title: titleFilter === '' ? '' : value });
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Typing your film name ..."
        value={titleFilter}
        onChange={handleTitleChange}
      />
     
    </div>
  );
}

export default Filter;