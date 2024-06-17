import React, { useEffect, useState } from 'react';
import { Product } from '../models/Product';
import IndividualP from './IndividualP';
import '../css/VocePovrce.css';

interface PovrceProps {
  povrce: Product[];
  onAdd: (id: number) => void;
  onDelete: (id: number) => void;
  resetCategory: () => void;
  selectedCategory: string;
  selectedPriceRange: string;
  resetPrice: () => void;
}

const Povrce: React.FC<PovrceProps> = ({ povrce, onAdd, onDelete, resetCategory, selectedCategory, selectedPriceRange,resetPrice }) => {
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

  const filteredPovrce = povrce
    .filter((product) => selectedCategory === 'sve' || product.family === selectedCategory)
    .filter(filterByPriceRange);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 2);
  };

  return (
    <div className="povrce-ind-container">
      <div className="povrce-ind">
        {filteredPovrce.length === 0 ? "Nema proizvoda" : filteredPovrce.slice(0, visibleProducts).map((p) => (
          <IndividualP key={p.id}
            oneP={p}
            onAdd={() => onAdd(p.id)}
            onDelete={() => onDelete(p.id)} />
        ))}
      </div>
      {visibleProducts < filteredPovrce.length && (
        <button className="show-more-btn" onClick={showMoreProducts}>Prikaži više</button>
      )}
    </div>
  );
};

export default Povrce;
