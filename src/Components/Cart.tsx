import React from 'react'
import { Product } from '../models/Product';
import IndividualP from './IndividualP';
import '../css/Cart.css'
import UserProfile from './UserProfile';
interface CartProps{
    proizvodi: Product[];
    onAdd: (id: number) => void;
    onDelete: (id: number) => void;
}
const Cart: React.FC<CartProps> = ({proizvodi , onAdd, onDelete}) => {
  return (
    <div className='korpa'>
      <div className="profil">
      <UserProfile />
      </div>
      <div className="proizvodi">
      {proizvodi.length === 0 ? "Korpa je prazna" :
      proizvodi.map((p) => (
        <IndividualP
        key={p.id}
        oneP={p}
        onAdd={() => onAdd(p.id)}
        onDelete={() => onDelete(p.id)}
        hideUnit={true}
         />
      ))}
      </div>
      
    </div>
  )
}




export default Cart