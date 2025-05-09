import useSort from '../hooks/useSort';
import useDisplayType from '../hooks/useDisplayType';
import ShortSelection from '../components/ShortSelection';
import PokemonList from '../components/PokemonList'; 
import DisplayToggle from '../components/DisplayToggle';
import { dummyData } from '../data/pokemonData'; 

const Home: React.FC = () => {
  const { sortOption, setSortOption } = useSort();
  const { displayType, toggleDisplayType } = useDisplayType();

  const sortedData = [...dummyData].sort((a, b) => {
    switch (sortOption) {
      case 'az':
        return a.name.localeCompare(b.name);
      case 'za':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1rem' 
      }}>
        <ShortSelection selected={sortOption} onChange={setSortOption} />
        <DisplayToggle displayType={displayType} onToggle={toggleDisplayType} />
      </div>

      <PokemonList data={sortedData} displayType={displayType} />
    </div>
  );
};

export default Home;
