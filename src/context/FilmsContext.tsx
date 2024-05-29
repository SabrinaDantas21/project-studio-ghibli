import React, { createContext, useEffect, useState } from 'react';

interface Film {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface FilmsContextType {
  films: Film[];
  favorites: string[];
  toggleFavorite: (filmId: string) => void;
}

export const FilmContext = createContext<FilmsContextType | undefined>(undefined);

function FilmsProvider({ children }: { children:React.ReactNode }) {
  const [films, setFilms] = useState<Film[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations');
        const data = await response.json();
        setFilms(data);
      } catch (error) {
        console.error('Erro ao buscar os filmes:', error);
      }
    };

    fetchFilms();
  }, []);

  const toggleFavorite = (filmId: string) => {
    if (favorites.includes(filmId)) {
      setFavorites(favorites.filter((id) => id !== filmId));
    } else {
      setFavorites([...favorites, filmId]);
    }
  };

  return (
    <FilmContext.Provider value={ { films, favorites, toggleFavorite } }>
      {children}
    </FilmContext.Provider>
  );
}

export default FilmsProvider;
