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
    <>
      <Header />
      <h1>Favorites</h1>
      <ul style={ { listStyleType: 'none', padding: 0 } }>
        {favoriteFilms.map((film) => (
          <li
            key={ film.id }
            style={ { border: '1px solid #ccc', margin: '16px 0', padding: '16px' } }
          >
            <h2>{film.title}</h2>
            <img
              src={ film.image }
              alt={ film.title }
              style={ { width: '200px', height: 'auto', borderRadius: '8px' } }
            />
            <p>{film.description}</p>
            <button
              type="button"
              onClick={ () => toggleFavorite(film.id) }
              style={ { background: 'none', border: 'none', cursor: 'pointer' } }
            >
              {favorites.includes(film.id) ? (
                <BsSuitHeartFill color="red" />
              ) : (
                <BsSuitHeartFill color="gray" />
              )}
            </button>

          </li>
        ))}
      </ul>
    </>
  );
}
