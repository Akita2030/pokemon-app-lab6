import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PokemonsList.css';

const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151') 
      .then((res) => res.json())
      .then((data) => {
        
        const pokemonsWithImages = data.results.map((pokemon, index) => ({
          ...pokemon,
          id: index + 1,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
        setPokemons(pokemonsWithImages);
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
