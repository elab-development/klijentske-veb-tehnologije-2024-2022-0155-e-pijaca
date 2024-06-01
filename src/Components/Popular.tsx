import React from 'react';
import '../css/Popular.css';
import Item from './Item';
import Proizvod from '../models/Proizvod';

interface PopularProps{
  proizvod: Proizvod[];
}

const Popular: React.FC<PopularProps> = ({proizvod}) => {
  return (
    <div className='popular'>
      <h1>Ljudi često kupuju:</h1>
      <hr />
      <div className="popular-item">
      {proizvod === null ? "No products" : proizvod.map((p) => (
        <Item proizvod={p}/>
      ))}
      </div>
    </div>
  );
}

export default Popular;
