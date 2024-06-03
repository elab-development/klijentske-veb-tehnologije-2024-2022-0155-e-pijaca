import { Product } from '../models/Product'
import IndividualP from './IndividualP';
import '../css/VocePovrce.css';
import { useEffect } from 'react';
interface povrceProps{
    povrce: Product[];
    onAdd: (id: number) => void;
    onDelete: (id: number) => void;
    resetCategory: () => void;
}

const Povrce: React.FC<povrceProps> = ({povrce , onAdd, onDelete, resetCategory}) => {
  
  useEffect(() => {
    resetCategory();
  }, []);
  
  return (
    
   
        <div className="povrce-ind">
        {povrce.length ===0 ? "Nema proizvoda" : povrce.map((p) => (
        <IndividualP key={p.id} 
        oneP={p} 
        onAdd={() => onAdd(p.id)}
        onDelete={() => onDelete(p.id)}/>
        ))}
        </div>
  
  )
}

export default Povrce