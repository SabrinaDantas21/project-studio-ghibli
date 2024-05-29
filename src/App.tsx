import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsProvider from './context/FilmsContext';

function App() {
  return (
    <FilmsProvider>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/favorites" element={ <Favorites /> } />
      </Routes>
    </FilmsProvider>
  );
}

export default App;
