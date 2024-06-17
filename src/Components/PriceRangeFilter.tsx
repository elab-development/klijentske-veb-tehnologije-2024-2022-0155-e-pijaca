import React from 'react';
import '../css/VocePovrce.css';

interface PriceRangeFilterProps {
  selectedPriceRange: string;
  onSelectPriceRange: (range: string) => void;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({ selectedPriceRange, onSelectPriceRange }) => {
  const priceRanges = ['sve', '50-100', '100-150', '150-200', 'preko 200'];

  return (
    <div className="price-filter">
      <h3>Filtriraj po ceni</h3>
      <ul>
        {priceRanges.map((range) => (
          <li
            key={range}
            onClick={() => onSelectPriceRange(range)}
            style={{ cursor: 'pointer', fontWeight: selectedPriceRange === range ? 'bold' : 'normal' }}
          >
            {range}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceRangeFilter;
