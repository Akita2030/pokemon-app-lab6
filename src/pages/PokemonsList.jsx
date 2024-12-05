import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PokemonsList.css';
import apiClient from '../apiClient';

const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]); // состояние для списка покемонов

  useEffect(() => {
    apiClient
      .get('/pokemon?limit=151') // запросим 151 покемона
      .then((response) => {
        const pokemonsWithImages = response.data.results.map((pokemon, index) => ({
          ...pokemon,
          id: index + 1,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
        setPokemons(pokemonsWithImages); // обновим состояние
      })
      .catch((err) => console.error('Ошибка загрузки:', err));
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <Link to={`/pokemon/${pokemon.id}`}>
              <img src={pokemon.image} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonsList;

