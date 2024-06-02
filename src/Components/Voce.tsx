
import { Product } from '../models/Product'
import IndividualP from './IndividualP';
import '../css/VocePovrce.css';

interface voceProps{
    voce: Product[];
    onAdd: (id: number) => void;
    onDelete: (id: number) => void;
}

const Voce: React.FC<voceProps> = ({voce ,onAdd, onDelete }) => {
 
  return (
    
        <div className="voce-ind">
        {voce === null ? "Nema proizvoda" : voce.map((v) => (
        <IndividualP key={v.id} 
        oneP={v} 
        onAdd={() => onAdd(v.id)}
        onDelete={() => onDelete(v.id)}/>
         ))}
         
        </div>
        
  )
}

export default Voce
