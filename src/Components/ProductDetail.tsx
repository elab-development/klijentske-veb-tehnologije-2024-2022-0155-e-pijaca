import React from 'react';
import { useParams } from 'react-router-dom';
import { getFruitById, getVegetableById } from '../models/Data';
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
import borovnica from '../assets/borovnica.png';
import maline from '../assets/maline.png';
import '../css/ProductDetail.css' ;
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import Popular from './Popular';
import Proizvod from '../models/Proizvod';

interface ProductDetailProps{
    proizvod: Proizvod[];
    onAdd: (id: number) => void;
    onDelete: (id: number) => void;
}

const ProductDetail: React.FC <ProductDetailProps> = ({onAdd, onDelete, proizvod}) => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id!); 

  const fruit = getFruitById(productId);
  const vegetable = getVegetableById(productId);

  const product = fruit || vegetable;

  if (!product) {
    return <div>Proizvod nije pronađen.</div>;
  }

  const imageStyle = { width: '250px', height: '350px', borderRadius: '20px' };

  return (
    <div className="container1">  <div className="product-detail-container">
    {product.id===1 ? <img  src={borovnica} alt={product.ime} style={imageStyle} /> :
  product.id===2 ? <img className="product-image" src={maline} alt={product.ime} style={imageStyle}/> :
  product.id===3 ? <img className="product-image" src={limun} alt={product.ime} style={imageStyle}/> :
  product.id===4 ? <img className="product-image" src={orah} alt={product.ime} style={imageStyle}/> :
  product.id===5 ? <img  className="product-image" src={badem} alt={product.ime} style={imageStyle}/> :
  product.id===6 ? <img  className="product-image" src={tresnje} alt={product.ime} style={imageStyle}/> :
  product.id===7 ? <img  className="product-image" src={pasulj} alt={product.ime} style={imageStyle}/> :
  product.id===8 ? <img  className="product-image" src={spanac} alt={product.ime} style={imageStyle}/> :
  product.id===9 ? <img  className="product-image" src={blitva} alt={product.ime} style={imageStyle}/> :
  product.id===10 ? <img  className="product-image" src={krompir} alt={product.ime} style={imageStyle}/> :
  product.id===11 ? <img  className="product-image" src={sargarepa} alt={product.ime} style={imageStyle}/> :
  product.id===12 ? <img  className="product-image" src={grasak} alt={product.ime} style={imageStyle}/>: <><p>Greska</p></> }
  <div className='description'><h1>{product.ime}</h1>
  <p>{product.opis}</p>
  <p className="product-price">Cena: {product.cena} RSD</p>
  <p>Količina: {product.kolicina} {product.jedinica}</p>
  <p>Kategorija: {product.family}</p>
  <div className="btn"><a  className="btn" aria-label="plus" onClick={() => onAdd(product.id)}><FaPlusCircle style={{ fontSize: '30px' }} /></a>
  <a  className="btn" aria-label="minus" onClick={() => onDelete(product.id)}><FaMinusCircle style={{ fontSize: '30px' }}/></a></div></div>
</div>
<Popular proizvod={proizvod} onAdd={onAdd} onDelete={onDelete}/>
</div>
  
  );
};

export default ProductDetail;
