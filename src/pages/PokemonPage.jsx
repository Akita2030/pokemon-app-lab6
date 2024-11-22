import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/PokemonPage.css'; 

const PokemonPage = () => {
  const { id } = useParams(); // получаем ID покемона из URL
  const [pokemon, setPokemon] = useState(null); // состояние для покемона

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) // запрос к API
      .then((res) => res.json()) 
      .then((data) => setPokemon(data)) 
      .catch((err) => console.error('Ошибка загрузки:', err)); 
  }, [id]);

  if (!pokemon) return <p>Загрузка...</p>; // показываем "загрузка", если данные не пришли

  return (
    <div className="pokemon-detail"> {/*статы покемонов*/}
      <div className="pokemon-card-detail">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        <p>Тип: {pokemon.types.map((t) => t.type.name).join(', ')}</p>
        <p>Вес: {pokemon.weight / 10} кг</p>
        <p>Рост: {pokemon.height / 10} м</p>
        <p>Опыт: {pokemon.base_experience}</p>
      </div>
    </div>

  );
};

export default PokemonPage;
