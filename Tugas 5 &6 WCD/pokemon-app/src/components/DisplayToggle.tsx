import React from 'react';
import './DisplayToggle.css';

interface DisplayToggleProps {
  displayType: 'list' | 'grid';
  onToggle: (type: 'list' | 'grid') => void;
}

const DisplayToggle: React.FC<DisplayToggleProps> = ({ displayType, onToggle }) => {
  return (
    <div className="display-toggle">
      <button
        className={`toggle-btn ${displayType === 'list' ? 'active' : ''}`}
        onClick={() => onToggle('list')}
        aria-label="List View"
      >
        <div className="list-icon">
          <span />
          <span />
          <span />
        </div>
      </button>
      <button
        className={`toggle-btn ${displayType === 'grid' ? 'active' : ''}`}
        onClick={() => onToggle('grid')}
        aria-label="Grid View"
      >
        <div className="grid-icon">
          <div /><div /><div /><div />
        </div>
      </button>
    </div>
  );
};

export default DisplayToggle;

