// src/components/Header.tsx
import { useState } from "react";
import { Search } from "lucide-react";
import SearchBar from "./SearchBar";
import "./Header.css";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="header">
      <img src="/logo_pokemon.png" alt="Logo Pokémon" />

      {showSearch ? (
        <SearchBar setShowSearch={setShowSearch} />
      ) : (
        <button className="search-btn" onClick={() => setShowSearch(true)}>
          <Search size={20} />
        </button>
      )}
    </header>
  );
}
