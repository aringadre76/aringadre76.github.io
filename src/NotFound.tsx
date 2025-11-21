import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="not-found-link">
          <button className="not-found-button">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
