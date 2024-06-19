import React from 'react';
import '../css/Item.css';
import Proizvod from '../models/Proizvod';
import borovnica from '../assets/borovnica.png';
import maline from '../assets/maline.png';
import sargarepa from '../assets/sargarepa.png';
import krompir from '../assets/krompir.png';
import { FaMinusCircle  , FaPlusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface ItemProps{
  proizvod: Proizvod;
  onAdd: (id: number) => void;
  onDelete: (id: number) => void;
}

const imageStyle = { width: '250px', height: '350px' };

const Item: React.FC<ItemProps> = ({proizvod, onAdd, onDelete}) => {
  return (
    <div className='item'>
      {proizvod.id===1 ? <img  src={borovnica} alt={proizvod.ime} style={imageStyle} /> :
      proizvod.id===2 ? <img  src={maline} alt={proizvod.ime} style={imageStyle}/> :
      proizvod.id===11 ? <img  src={sargarepa} alt={proizvod.ime} style={imageStyle} /> :
      proizvod.id===10 ? <img  src={krompir} alt={proizvod.ime} style={imageStyle} />: <><p>Greska</p></> }
      <Link to={`/product/${proizvod.id}`} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
  <p style={{ margin: 0 }}>{proizvod.ime}</p>
</Link>
      <div className="item-price">
      <span className="price">{proizvod.cena}</span><br />
        {proizvod.kolicina}{proizvod.jedinica}
      </div>
      <a  className="btn" onClick={() => onAdd(proizvod.id)}><FaPlusCircle style={{ fontSize: '30px' }} /></a>
      <a  className="btn" onClick={() => onDelete(proizvod.id)}><FaMinusCircle style={{ fontSize: '30px' }}/></a>
    </div>
  );
}

export default Item;