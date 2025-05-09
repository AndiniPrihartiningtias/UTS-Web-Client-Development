import React from 'react';
import { SortOption } from '../hooks/useSort';
import './ShortSelection.css';


type Props = {
  selected: SortOption;
  onChange: (value: SortOption) => void;
};

const options: { label: string; value: SortOption }[] = [
  { label: 'A-Z', value: 'az' },
  { label: 'Z-A', value: 'za' },
];

const ShortSelection: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <div className="sort-container">
      <label htmlFor="sort"className="sort-label">Sort by</label>
      <select
        id="sort"
        value={selected}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="sort-dropdown"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShortSelection;
