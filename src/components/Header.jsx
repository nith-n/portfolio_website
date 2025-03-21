import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../App.css';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  const togglerStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
    borderColor: isDarkMode ? '#ffffff' : '#000000'
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ width: '110px', height: '70px' }} 
          />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={togglerStyle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
            <li className="nav-item">
              <button onClick={toggleTheme} className="theme-toggle nav-link">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
