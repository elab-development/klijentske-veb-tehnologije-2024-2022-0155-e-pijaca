
import { Product } from '../models/Product'
import IndividualP from './IndividualP';
import '../css/VocePovrce.css';

interface voceProps{
    voce: Product[];
    onAdd: (id: number) => void;
}

const Voce: React.FC<voceProps> = ({voce ,onAdd }) => {
 
  return (
    
        <div className="voce-ind">
        {voce === null ? "Nema proizvoda" : voce.map((v) => (
        <IndividualP key={v.id} 
        oneP={v} 
        onAdd={() => onAdd(v.id)}/>
         ))}
         
        </div>
        
  )
}

export default Voce
