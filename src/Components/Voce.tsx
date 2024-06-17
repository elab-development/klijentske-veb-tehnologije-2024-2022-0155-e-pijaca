import React, { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import IndividualP from './IndividualP';
import '../css/VocePovrce.css';

interface VoceProps {
  voce: Product[];
  onAdd: (id: number) => void;
  onDelete: (id: number) => void;
  resetCategory: () => void;
  resetPrice: () => void;
  selectedCategory: string;
  selectedPriceRange: string;
}

const Voce: React.FC<VoceProps> = ({ voce, onAdd, onDelete, resetCategory, selectedCategory, selectedPriceRange, resetPrice }) => {
  const [visibleProducts, setVisibleProducts] = useState(2);

  useEffect(() => {
    resetCategory();
    resetPrice();
  }, []);

  const filterByPriceRange = (product: Product) => {
    const price = product.cena;
    switch (selectedPriceRange) {
      case '50-100':
        return price >= 50 && price <= 100;
      case '100-150':
        return price > 100 && price <= 150;
      case '150-200':
        return price > 150 && price <= 200;
      case 'preko 200':
        return price > 200;
      default:
        return true;
    }
  };

  const filteredVoce = voce
    .filter((product) => selectedCategory === 'sve' || product.family === selectedCategory)
    .filter(filterByPriceRange);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 2);
  };

  return (
    <div className="voce-ind-container">
      <div className="voce-ind">
        {filteredVoce.length === 0 ? "Nema proizvoda" : filteredVoce.slice(0, visibleProducts).map((v) => (
          <IndividualP key={v.id}
            oneP={v}
            onAdd={() => onAdd(v.id)}
            onDelete={() => onDelete(v.id)} />
        ))}
      </div>
      {visibleProducts < filteredVoce.length && (
        <button className="show-more-btn" onClick={showMoreProducts}>Prikaži više</button>
      )}
    </div>
  );
};

export default Voce;

