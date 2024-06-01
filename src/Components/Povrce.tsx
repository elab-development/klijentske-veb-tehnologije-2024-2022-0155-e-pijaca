import { Product } from '../models/Product'
import IndividualP from './IndividualP';
import '../css/VocePovrce.css';
interface povrceProps{
    povrce: Product[];
    onAdd: (id: number) => void;
}

const Povrce: React.FC<povrceProps> = ({povrce , onAdd}) => {
  
  
  return (
    
   
        <div className="povrce-ind">
        {povrce.length ===0 ? "Nema proizvoda" : povrce.map((p) => (
        <IndividualP key={p.id} oneP={p} onAdd={() => onAdd(p.id)}/>
        ))}
        </div>
  
  )
}

export default Povrce