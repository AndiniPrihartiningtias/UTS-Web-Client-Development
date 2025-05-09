import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonList.css';

interface Pokemon {
  name: string;
  image: string;
  type: string;
  power: string;
}

interface PokemonListProps {
  data: Pokemon[];
  displayType: 'list' | 'grid';
}

const PokemonList: React.FC<PokemonListProps> = ({ data, displayType }) => {
  return (
    <div className={`pokemon-container ${displayType}`}>
      {data.map((pokemon) => (
        <div key={pokemon.name} className={`pokemon-card ${displayType}`}>
          <Link
            to={`/pokemon/${pokemon.name.toLowerCase()}`}
            className="pokemon-card-link"
            style={{ width: '100%', height: '100%', position: 'relative', display: 'block' }}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className={`pokemon-image ${displayType}`}
            />
            <div className={`pokemon-info ${displayType}`}>
              <h3 className={`pokemon-name ${displayType}`}>{pokemon.name}</h3>
              {displayType === 'list' && (
                <>
                  <p className="pokemon-type">{pokemon.type}</p>
                  <p className="pokemon-power">{pokemon.power}</p>
                </>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
