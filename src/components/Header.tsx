import { Link, useLocation } from 'react-router-dom';
import { FaHeart, FaHome } from 'react-icons/fa';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header style={ { display: 'flex' } }>
      <img
        style={ { width: '300px', marginRight: '60%', marginLeft: '10%' } }
        src="src/img/totoro.png"
        alt="totoro"
      />
      {pathname === '/favorites' ? (
        <Link to="/" style={ { display: 'contents' } }>
          <FaHome
            style={ {
              width: '40px', height: '50px', color: 'darkturquoise', padding: '5px' } }
          />
        </Link>
      ) : (
        <Link to="/favorites" style={ { display: 'contents' } }>
          <p style={ { color: 'darkslategrey' } }>
            Favorites
            <FaHeart
              style={ {
                width: '30px', height: '30px', color: 'darkturquoise' } }
            />
          </p>
        </Link>
      )}
    </header>
  );
}
