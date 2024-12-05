import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/PokemonPage.css';
import apiClient from '../apiClient';

const PokemonPage = () => {
  const { id } = useParams(); // получаем ID покемона из URL
  const [pokemon, setPokemon] = useState(null); // состояние для информации о покемоне
  const [loading, setLoading] = useState(true); // состояние загрузки
  const [error, setError] = useState(null); // состояние ошибок

  useEffect(() => {
    apiClient
      .get(`/pokemon/${id}`) // запросим данные покемона по ID
      .then((response) => {
        setPokemon(response.data);
        setLoading(false); // отключаем загрузку
      })
      .catch((err) => {
        setError('Ошибка загрузки данных о покемоне');
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Загрузка...</p>; // отображаем, если данные загружаются
  if (error) return <p>{error}</p>; // отображаем ошибку
  if (!pokemon) return <p>Данных нет</p>; // если данных нет

  return (
    <div className="pokemon-detail">
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

