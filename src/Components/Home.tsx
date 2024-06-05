import React from 'react';
import Deo1 from './Deo1';
import Popular from './Popular';
import Proizvod from '../models/Proizvod';
import { Product } from '../models/Product';
import IndividualP from './IndividualP';
import '../css/Home.css';


interface HomeProps{
  proizvod: Proizvod[];
  products: Product[];
  onAdd: (id: number) => void;
  onDelete: (id: number) => void;
}

const Home: React.FC <HomeProps>= ({proizvod , products, onAdd, onDelete}) => {
  return (
    <div>
      <Deo1 />
     
      <div className="home-container">
        <div className="home-text-container">
        <h1>Katalog Svežeg Voća i Povrća</h1>
<p>Dobrodošli u naš sveobuhvatni katalog svežeg voća i povrća. Ovde možete pronaći širok izbor najkvalitetnijih plodova prirode, pažljivo odabranih i dostupnih za vašu svakodnevnu ishranu. Pogledajte našu ponudu i odaberite zdrave namirnice za vas i vašu porodicu.</p>
        </div>
        {products.map((p)=>
        <IndividualP oneP={p}
        onAdd={() => onAdd(p.id)}
        onDelete={() => onDelete(p.id)}/>)}
      </div>
     
        <Popular proizvod={proizvod} onAdd={onAdd} onDelete={onDelete}/>
       


    </div>
  );
}


export default Home;

