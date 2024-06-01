import React from 'react'
import { Product } from '../models/Product'
import IndividualP from './IndividualP';
import '../css/VocePovrce.css';

interface voceProps{
    voce: Product[];
}

const Voce: React.FC<voceProps> = ({voce}) => {
  return (
    
        <div className="voce-ind">
        {voce === null ? "Nema proizvoda" : voce.map((v) => (
        <IndividualP oneP={v}/>
         ))}
         
        </div>
        
  )
}

export default Voce
