import { Product } from '../models/Product'
import IndividualP from './IndividualP';
import '../css/VocePovrce.css';
import { useEffect, useState } from 'react';

interface voceProps{
    voce: Product[];
    onAdd: (id: number) => void;
    onDelete: (id: number) => void;
    resetCategory: () => void;
}

const Voce: React.FC<voceProps> = ({voce ,onAdd, onDelete, resetCategory }) => {
  const [visibleProducts, setVisibleProducts] = useState(2);

  useEffect(() => {
    resetCategory();
  }, []);

  const showMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 2);
  };
  
  return (
    <div className="voce-ind-container">
    <div className="voce-ind">
      {voce.length === 0 ? "Nema proizvoda" : voce.slice(0, visibleProducts).map((v) => (
        <IndividualP key={v.id} 
        oneP={v} 
        onAdd={() => onAdd(v.id)}
        onDelete={() => onDelete(v.id)} />
      ))}
    </div>
    {visibleProducts < voce.length && (
      <button className="show-more-btn" onClick={showMoreProducts}>Prikaži više</button>
    )}
  </div>
);
}

export default Voce
