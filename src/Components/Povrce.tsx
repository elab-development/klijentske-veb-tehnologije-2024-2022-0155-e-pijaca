import { Product } from '../models/Product'
import IndividualP from './IndividualP';
import '../css/VocePovrce.css';
import { useEffect, useState } from 'react';
interface povrceProps{
    povrce: Product[];
    onAdd: (id: number) => void;
    onDelete: (id: number) => void;
    resetCategory: () => void;
}


const Povrce: React.FC<povrceProps> = ({povrce , onAdd, onDelete, resetCategory}) => {
  const [visibleProducts, setVisibleProducts] = useState(2);


  useEffect(() => {
    resetCategory();
  }, []);


  const showMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 2);
  };
 
  return (
   
    <div className="povrce-ind-container">
        <div className="povrce-ind">
        {povrce.length ===0 ? "Nema proizvoda" : povrce.slice(0, visibleProducts).map((p) => (
        <IndividualP key={p.id}
        oneP={p}
        onAdd={() => onAdd(p.id)}
        onDelete={() => onDelete(p.id)}/>
        ))}
        </div>{visibleProducts < povrce.length && (
      <button className="show-more-btn" onClick={showMoreProducts}>Prikaži više</button>
    )}
  </div>
);
 
 
}


export default Povrce