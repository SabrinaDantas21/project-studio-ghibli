import { useContext } from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';
import { FilmContext } from '../context/FilmsContext';
import Header from '../components/Header';

export default function Home() {
  const filmContext = useContext(FilmContext);

  if (!filmContext) {
    return <div>Carregando...</div>;
  }

  const { films, favorites, toggleFavorite } = filmContext;

  if (!films) {
    return <div>Carregando...</div>;
  }

  const isFavorite = (filmId: string) => favorites.includes(filmId);

  return (
    <div style={ { backgroundColor: 'aquamarine', padding: '20px' } }>
      <Header />
      <h1 style={ { textAlign: 'center', color: 'lightseagreen' } }>Films</h1>
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
        {films.map((film) => (
          <li
            key={ film.id }
            style={ {
              border: '1px solid #ccc',
              textAlign: 'center',
              padding: '16px',
              width: '200px',
              backgroundColor: 'lightseagreen',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            } }
          >
            <h4>{film.title}</h4>
            <img
              src={ film.image }
              alt={ film.title }
              style={ { width: '100%', height: 'auto', borderRadius: '8px' } }
            />
            <button
              type="button"
              onClick={ () => toggleFavorite(film.id) }
              style={ {
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                marginTop: '10px',
              } }
            >
              {isFavorite(film.id) ? (
                <BsSuitHeartFill
                  style={ { width: '30px', height: '30px', color: 'darkmagenta' } }
                />
              ) : (
                <BsSuitHeartFill
                  style={ { width: '30px', height: '30px', color: 'gray' } }
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
