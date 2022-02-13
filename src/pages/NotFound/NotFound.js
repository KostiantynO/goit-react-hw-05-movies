import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <p>Page not found</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};
