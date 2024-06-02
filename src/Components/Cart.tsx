import React from 'react'
import { Product } from '../models/Product';
import IndividualP from './IndividualP';

interface CartProps{
    proizvodi: Product[];
    onAdd: (id: number) => void;
    onDelete: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({proizvodi , onAdd, onDelete}) => {
  return (
    <div>
      {proizvodi.length === 0 ? "Korpa je prazna" : 
      proizvodi.map((p) => (
        <IndividualP
        key={p.id} 
        oneP={p}
        onAdd={() => onAdd(p.id)}
        onDelete={() => onAdd(p.id)}
         />
      ))}
    </div>
  )
}

export default Cart
