import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/Prijava/LoginSignup';
import Login from './Components/Prijava/Login';
import Voce from './Components/Voce';
import Povrce from './Components/Povrce';
import CategoryFilter from './Components/CategoryFilter';
import Cart from './Components/Cart';
import useCart from './Components/UseCart'; 
import { useEffect, useState } from 'react';
import {proizvod,voce, povrce, voceCategories, povrceCategories, products} from './models/Data';


function App() {
  const { cartNum, cartProducts, addToCart, deleteFromCart } = useCart(products); 

  const [selectedVoceCategory, setSelectedVoceCategory] = useState<string>('sve');
  const [selectedPovrceCategory, setSelectedPovrceCategory] = useState<string>('sve');

  const resetVoceCategory = () => setSelectedVoceCategory('sve');
  const resetPovrceCategory = () => setSelectedPovrceCategory('sve');

  useEffect(() => {
    resetVoceCategory();
    resetPovrceCategory();
  }, []);

  const filteredVoce = selectedVoceCategory === 'sve' ? voce : voce.filter(product => product.family === selectedVoceCategory);
  const filteredPovrce = selectedPovrceCategory === 'sve' ? povrce : povrce.filter(product => product.family === selectedPovrceCategory);

  return (
    <div>
      <BrowserRouter>
        <Navbar cartNum={cartNum} />
        <Routes>
          <>
            <Route path='/' element={<Home proizvod={proizvod} products={products} onAdd={addToCart} onDelete={deleteFromCart} />} />
            <Route path='/voce' element={
              <div className='container'>
                <div className="category-filter">
                  <CategoryFilter categories={voceCategories} selectedCategory={selectedVoceCategory} onSelectCategory={setSelectedVoceCategory} />
                </div>
                <Voce voce={filteredVoce} onAdd={addToCart} onDelete={deleteFromCart} resetCategory={resetVoceCategory}/>
               
              </div>} />
            <Route path='/povrce' element={
              <div className='container'>
                <div className="category-filter">
                  <CategoryFilter categories={povrceCategories} selectedCategory={selectedPovrceCategory} onSelectCategory={setSelectedPovrceCategory} />
                </div>
                <Povrce povrce={filteredPovrce} onAdd={addToCart} onDelete={deleteFromCart} resetCategory={resetPovrceCategory} />
              </div>} />
            <Route path='/signup' element={<LoginSignup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart proizvodi={cartProducts} onAdd={addToCart} onDelete={deleteFromCart} />} />
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
