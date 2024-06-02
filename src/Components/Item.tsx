import React from 'react';
import '../css/Item.css';
import Proizvod from '../models/Proizvod';
import borovnica from '../assets/borovnica.png';
import maline from '../assets/maline.png';
import sargarepa from '../assets/sargarepa.png';
import krompir from '../assets/krompir.png';
import { FaMinusCircle  , FaPlusCircle } from "react-icons/fa";


interface ItemProps{
  proizvod: Proizvod;
  onAdd: (id: number) => void;
}


const imageStyle = { width: '250px', height: '350px' };


const Item: React.FC<ItemProps> = ({proizvod, onAdd}) => {
  return (
    <div className='item'>
      {proizvod.id===1 ? <img  src={borovnica} alt={proizvod.ime} style={imageStyle} /> :
      proizvod.id===2 ? <img  src={maline} alt={proizvod.ime} style={imageStyle}/> :
      proizvod.id===3 ? <img  src={sargarepa} alt={proizvod.ime} style={imageStyle} /> :
      proizvod.id===4 ? <img  src={krompir} alt={proizvod.ime} style={imageStyle} />: <><p>Greska</p></> }
      <p>{proizvod.ime}</p>
      <div className="item-price">
      <span className="price">{proizvod.cena}</span><br />
        {proizvod.količina}{proizvod.jedinica}
      </div>


      <a  className="btn" onClick={() => onAdd(proizvod.id)}><FaPlusCircle style={{ fontSize: '30px' }} /></a>
      <a  className="btn" onClick={() => onAdd(proizvod.id)}><FaMinusCircle style={{ fontSize: '30px' }}/></a>
    </div>
  );
}


export default Item;

