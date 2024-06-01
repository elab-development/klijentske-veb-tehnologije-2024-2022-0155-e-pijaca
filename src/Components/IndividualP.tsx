import React from 'react';
import { Product } from '../models/Product';
import borovnica from '../assets/borovnica.png';
import maline from '../assets/maline.png';
import '../css/Item.css';
import { FaMinusCircle  , FaPlusCircle } from "react-icons/fa";

interface IndividualProps{
    oneP: Product;
    onAdd: (id: number) => void;
}

const IndividualP : React.FC<IndividualProps> = ({oneP, onAdd}) => {
    return (
      <div> 
        <div className='individual'>
      {oneP.id===1 ? <img  src={borovnica} alt={oneP.ime} /> : 
      oneP.id===2 ? <img  src={maline} alt={oneP.ime} /> :
      oneP.id===3 ? <img  src={maline} alt={oneP.ime} /> :
      oneP.id===4 ? <img  src={maline} alt={oneP.ime} /> :
      oneP.id===5 ? <img  src={maline} alt={oneP.ime} /> :
      oneP.id===6 ? <img  src={borovnica} alt={oneP.ime} /> : 
      oneP.id===7 ? <img  src={maline} alt={oneP.ime} /> :
      oneP.id===8 ? <img  src={maline} alt={oneP.ime} /> :
      oneP.id===9 ? <img  src={maline} alt={oneP.ime} /> :
      oneP.id===10 ? <img  src={maline} alt={oneP.ime} /> :
      oneP.id===11 ? <img  src={maline} alt={oneP.ime} /> :
      oneP.id===12 ? <img  src={maline} alt={oneP.ime} />: <><p>Greska</p></> }
      <p>{oneP.ime}</p>
      <div className="individual-desc">
        {oneP.cena}<br />
        {oneP.kolicina}{oneP.jedinica}
        
      </div>
      <a  className="btn" onClick={() => onAdd(oneP.id)}><FaPlusCircle style={{ fontSize: '30px' }} /></a>
      <a  className="btn" onClick={() => onAdd(oneP.id)}><FaMinusCircle style={{ fontSize: '30px' }}/></a>
    </div>
      </div>
    )
  }

export default IndividualP
