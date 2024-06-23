import React from 'react';
import { Product } from '../models/Product';
import borovnica from '../assets/borovnica.png';
import maline from '../assets/maline.png';
import '../css/IndividualP.css';
import { FaMinusCircle  , FaPlusCircle } from "react-icons/fa";
import  badem  from '../assets/badem.jpg';
import orah from '../assets/orah.jpg';
import grasak from '../assets/grasak.avif';
import limun from '../assets/limun.jpg';
import tresnje from '../assets/tresnje.jpg';
import pasulj from '../assets/pasulj.jpg';
import spanac from '../assets/spanac.jpg';
import blitva from '../assets/blitva.jpg';
import krompir from '../assets/krompir.png';
import sargarepa from '../assets/sargarepa.png';
import { Link } from 'react-router-dom';

interface IndividualProps{
    oneP: Product;
    onAdd: (id: number) => void;
    onDelete: (id: number) => void;
    hideUnit?: boolean;
}
const imageStyle = { width: '250px', height: '350px' };

const IndividualP : React.FC<IndividualProps> = ({oneP, onAdd, onDelete,hideUnit}) => {
    return (
      <div>
        <div className='individual'>
       
      {oneP.id===1 ? <img  src={borovnica} alt={oneP.ime} style={imageStyle} /> :
      oneP.id===2 ? <img  src={maline} alt={oneP.ime} style={imageStyle}/> :
      oneP.id===3 ? <img  src={limun} alt={oneP.ime} style={imageStyle}/> :
      oneP.id===4 ? <img  src={orah} alt={oneP.ime} style={imageStyle}/> :
      oneP.id===5 ? <img  src={badem} alt={oneP.ime} style={imageStyle}/> :
      oneP.id===6 ? <img  src={tresnje} alt={oneP.ime} style={imageStyle}/> :
      oneP.id===7 ? <img  src={pasulj} alt={oneP.ime} style={imageStyle}/> :
      oneP.id===8 ? <img  src={spanac} alt={oneP.ime} style={imageStyle}/> :
      oneP.id===9 ? <img  src={blitva} alt={oneP.ime} style={imageStyle}/> :
      oneP.id===10 ? <img  src={krompir} alt={oneP.ime} style={imageStyle}/> :
      oneP.id===11 ? <img  src={sargarepa} alt={oneP.ime} style={imageStyle}/> :
      oneP.id===12 ? <img  src={grasak} alt={oneP.ime} style={imageStyle}/>: <><p>Greska</p></> }
   <Link to={`/product/${oneP.id}`} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
  <p style={{ margin: 0 }}>{oneP.ime}</p>
</Link>

      <div className="individual-desc">
      <span className="price">{oneP.cena}</span><br />
       {oneP.kolicina}{!hideUnit && oneP.jedinica}
       
      </div>
      <a  className="btn" aria-label="plus" onClick={() => onAdd(oneP.id)}><FaPlusCircle style={{ fontSize: '30px' }} /></a>
      <a  className="btn" aria-label="minus" onClick={() => onDelete(oneP.id)}><FaMinusCircle style={{ fontSize: '30px' }}/></a>
    </div>


      </div>
    )
  }

export default IndividualP
