
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { onePokemonData } from "../data/onePokemonData";
import "./SearchBar.css";

interface SearchBarProps {
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setShowSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const filteredResults = onePokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = (name: string) => {
    navigate(`/pokemon/${name.toLowerCase()}`);
    setSearchValue("");
    setShowSearch(false);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && filteredResults.length > 0) {
            handleSelect(filteredResults[0].name);
          }
        }}
        autoFocus
      />
      <button
        className="close-btn"
        onClick={() => {
          setShowSearch(false);
          setSearchValue("");
        }}
      >
        <X size={16} />
      </button>

      {searchValue && (
        <div className="search-results">
          {filteredResults.length > 0 ? (
            filteredResults.map((pokemon) => (
              <div
                key={pokemon.name}
                className="search-result-item"
                onClick={() => handleSelect(pokemon.name)}
              >

                <span>{pokemon.name}</span>
              </div>
            ))
          ) : (
            <p className="no-result">No Pokémon found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
