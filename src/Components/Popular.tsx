import React from 'react';
import '../css/Popular.css';
import Item from './Item';
import Proizvod from '../models/Proizvod';

interface PopularProps{
  proizvod: Proizvod[];
  onAdd: (id: number) => void;
  onDelete: (id: number) => void;
}

const Popular: React.FC<PopularProps> = ({proizvod, onAdd,onDelete}) => {
  return (
    <div className='popular'>
      <h1>Ljudi često kupuju:</h1>
      <hr />
      <div className="popular-item">
      {proizvod === null ? "No products" : proizvod.map((p) => (
        <Item proizvod={p} 
        key={p.id}
        onAdd={() => onAdd(p.id)} 
        onDelete={() => onDelete(p.id)}/>
      ))}
      </div>
    </div>
  );
}

export default Popular;
