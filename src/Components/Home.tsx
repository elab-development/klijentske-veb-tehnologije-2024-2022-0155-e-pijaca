import React from 'react';
import Deo1 from './Deo1';
import Popular from './Popular';
import Proizvod from '../models/Proizvod';

interface HomeProps{
  proizvod: Proizvod[];
}



const Home: React.FC <HomeProps>= ({proizvod}) => {
  return (
    <div>
      <Deo1 />
      <Popular proizvod={proizvod}/>
    </div>
  );
}

export default Home;
