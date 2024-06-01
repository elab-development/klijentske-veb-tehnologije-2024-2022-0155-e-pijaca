import React from 'react'
import { Product } from '../models/Product'
import IndividualP from './IndividualP';
import '../css/VocePovrce.css';
interface povrceProps{
    povrce: Product[];
}

const Povrce: React.FC<povrceProps> = ({povrce}) => {
  return (
    
   
        <div className="povrce-ind">
        {povrce === null ? "Nema proizvoda" : povrce.map((p) => (
        <IndividualP oneP={p}/>
        ))}
        </div>
  
  )
}

export default Povrce