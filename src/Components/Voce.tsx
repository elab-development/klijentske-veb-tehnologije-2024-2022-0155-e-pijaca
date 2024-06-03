import { Product } from '../models/Product'
import IndividualP from './IndividualP';
import '../css/VocePovrce.css';
import { useEffect } from 'react';

interface voceProps{
    voce: Product[];
    onAdd: (id: number) => void;
    onDelete: (id: number) => void;
    resetCategory: () => void;
}

const Voce: React.FC<voceProps> = ({voce ,onAdd, onDelete, resetCategory }) => {
  
  useEffect(() => {
    resetCategory();
  }, []);
  
  return (
    
        <div className="voce-ind">
        {voce.length === 0 ? "Nema proizvoda" : voce.map((v) => (
        <IndividualP key={v.id} 
        oneP={v} 
        onAdd={() => onAdd(v.id)}
        onDelete={() => onDelete(v.id)}/>
         ))}
         
        </div>
        
  )
}

export default Voce
