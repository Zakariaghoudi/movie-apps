import './Navbar.css'; // Assuming you have a CSS file for styling

function Navber({ onFilterChange }) {
  return (
    
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={() => onFilterChange('All')}> All</button>
        </li>
        <li>
          <button onClick={() => onFilterChange('Drama')}>Drama</button>
        </li>
        <li>
          <button onClick={() => onFilterChange('Sci-Fi')}>Sci-Fi</button>
        </li>
        <li>
          <button onClick={() => onFilterChange('Comedy')}>Comedy</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navber;