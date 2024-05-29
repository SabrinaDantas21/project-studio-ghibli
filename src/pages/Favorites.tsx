import { useContext } from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';
import { FilmContext } from '../context/FilmsContext';
import Header from '../components/Header';

export default function Favorites() {
  const filmContext = useContext(FilmContext);

  if (!filmContext) {
    return <div>Carregando...</div>;
  }

  const { films, favorites, toggleFavorite } = filmContext;

  if (!films) {
    return <div>Carregando...</div>;
  }

  const favoriteFilms = films.filter((film) => favorites.includes(film.id));

  return (
    <div style={ { backgroundColor: 'aquamarine', padding: '20px' } }>
      <Header />
      <h1 style={ { textAlign: 'center', color: 'lightseagreen' } }>Favorites</h1>
      <ul
        style={ {
          listStyleType: 'none',
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
        } }
      >
        {favoriteFilms.map((film) => (
          <li
            key={ film.id }
            style={ { border: '1px solid #ccc',
              textAlign: 'center',
              padding: '15px',
              width: '250px',
              backgroundColor: 'lightseagreen',
              borderRadius: '8px',
              boxShadow: '0 1px 18px darkcyan' } }
          >
            <h2>{film.title}</h2>
            <img
              src={ film.image }
              alt={ film.title }
              style={ { width: '100%', height: 'auto', borderRadius: '8px' } }
            />
            <p
              style={ {
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: 'darkcyan',
                textAlign: 'center' } }
            >
              {film.description}
            </p>
            <button
              type="button"
              onClick={ () => toggleFavorite(film.id) }
              style={ { background: 'none', border: 'none', cursor: 'pointer' } }
            >
              <BsSuitHeartFill
                style={ { width: '30px', height: '30px', color: 'darkmagenta' } }
              />
              {' '}
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}
