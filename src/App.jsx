import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonsList from './pages/PokemonsList'; 
import PokemonPage from './pages/PokemonPage';  
import Navbar from './components/Navbar'; 

const App = () => {
  
    return (
      <>
        <Navbar /> {/* отображаем меню навигации */}
        <Routes>
          <Route path="/" element={<PokemonsList />} /> {/* главная страница */}
          <Route path="/pokemon/:id" element={<PokemonPage />} /> {/* страница с деталями */}
        </Routes>
      </>
    );
};

export default App;


