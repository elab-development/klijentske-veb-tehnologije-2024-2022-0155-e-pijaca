import React from 'react';
import Deo1 from './Deo1';
import Popular from './Popular';
import Proizvod from '../models/Proizvod';
import { Product } from '../models/Product';

interface HomeProps{
  proizvod: Proizvod[];
  products: Product[];//za prvu stranicu , katalog
  onAdd: (id: number) => void;
}



const Home: React.FC <HomeProps>= ({proizvod , products, onAdd}) => {
  return (
    <div>
      <Deo1 />
      <Popular proizvod={proizvod} onAdd={onAdd}/>

    </div>
  );
}

export default Home;
