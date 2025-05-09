import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { onePokemonData } from '../data/onePokemonData';
import './OnePokemon.css';

const OnePokemon: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const pokemon = onePokemonData.find(
    (p) => p.name.toLowerCase() === name?.toLowerCase()
  );

  if (!pokemon) {
    return (
      <div className="pokemon-detail-not-found">
        Pokémon tidak ditemukan 😢
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="pokemon-page">
      <button className="back-button" onClick={() => navigate(-1)}>← Kembali</button>

      <div className="pokemon-visual">
        <div className="pokemon-id">{pokemon.power}</div>
        <img src={pokemon.image} alt={pokemon.name} className="pokemon-main-image" />
        <h1 className="pokemon-nameid">{pokemon.name}</h1>
      </div>

      <img src={pokemon.image} alt={`${pokemon.name}-mini`} className="pokemon-mini-image" />

      <div className="pokemon-stats-card">
        <div className="health-bar-container">
          <span className="health-label">Health</span>
          <div className="health-bar">
            <div
              className="health-bar-fill"
              style={{ width: `${(pokemon.health / 1000) * 100}%` }}
            ></div>
          </div>
          <span className="health-value">{pokemon.health} from 1000</span>
        </div>

        <div className="stats">
          <div className="stat">
            <span className="stat-label">Attack</span>
            <span className="stat-value">{pokemon.attack}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Defense</span>
            <span className="stat-value">{pokemon.defense}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePokemon;
