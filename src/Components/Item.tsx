import React from 'react';
import '../css/Item.css';
import Proizvod from '../models/Proizvod';
import borovnica from '../assets/borovnica.png';
import maline from '../assets/maline.png';
import sargarepa from '../assets/sargarepa.png';
import krompir from '../assets/krompir.png';
interface ItemProps{
  proizvod: Proizvod;
}

const Item: React.FC<ItemProps> = ({proizvod}) => {
  return (
    <div className='item'>
      {proizvod.id===1 ? <img  src={borovnica} alt={proizvod.ime} /> : 
      proizvod.id===2 ? <img  src={maline} alt={proizvod.ime} /> :
      proizvod.id===3 ? <img  src={sargarepa} alt={proizvod.ime} /> :
      proizvod.id===4 ? <img  src={krompir} alt={proizvod.ime} />: <><p>Greska</p></> }
      <p>{proizvod.ime}</p>
      <div className="item-price">
        {proizvod.cena}<br />
        {proizvod.količina}{proizvod.jedinica}
      </div>
    </div>
  );
}

export default Item;
