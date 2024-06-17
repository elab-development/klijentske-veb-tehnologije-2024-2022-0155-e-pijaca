import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginSignup from './Components/Prijava/LoginSignup';
import Login from './Components/Prijava/Login';
import Voce from './Components/Voce';
import Povrce from './Components/Povrce';
import CategoryFilter from './Components/CategoryFilter';
import PriceRangeFilter from './Components/PriceRangeFilter';
import Cart from './Components/Cart';
import useCart from './Components/UseCart';
import { useEffect, useState } from 'react';
import { proizvod, voce, povrce, voceCategories, povrceCategories, products } from './models/Data';
import Recepti from './Components/Recepti';

function App() {
  const { cartNum, cartProducts, addToCart, deleteFromCart } = useCart(products);

  const [selectedVoceCategory, setSelectedVoceCategory] = useState<string>('sve');
  const [selectedPovrceCategory, setSelectedPovrceCategory] = useState<string>('sve');
  const [selectedVocePriceRange, setSelectedVocePriceRange] = useState<string>('sve');
  const [selectedPovrcePriceRange, setSelectedPovrcePriceRange] = useState<string>('sve');

  const resetVoceCategory = () => setSelectedVoceCategory('sve');
  const resetPovrceCategory = () => setSelectedPovrceCategory('sve');
  const resetVocePriceRange = () => setSelectedVocePriceRange('sve');
  const resetPovrcePriceRange = () => setSelectedPovrcePriceRange('sve');

  useEffect(() => {
    resetVoceCategory();
    resetPovrceCategory();
  }, []);

  const filteredVoce = voce
    .filter((product) => selectedVoceCategory === 'sve' || product.family === selectedVoceCategory)
    .filter((product) => {
      const price = product.cena;
      switch (selectedVocePriceRange) {
        case '50-100':
          return price >= 50 && price <= 100;
        case '100-150':
          return price > 100 && price <= 150;
        case '150-200':
          return price > 150 && price <= 200;
        case 'preko 200':
          return price > 200;
        default:
          return true;
      }
    });

  const filteredPovrce = povrce
    .filter((product) => selectedPovrceCategory === 'sve' || product.family === selectedPovrceCategory)
    .filter((product) => {
      const price = product.cena;
      switch (selectedPovrcePriceRange) {
        case '50-100':
          return price >= 50 && price <= 100;
        case '100-150':
          return price > 100 && price <= 150;
        case '150-200':
          return price > 150 && price <= 200;
        case 'preko 200':
          return price > 200;
        default:
          return true;
      }
    });

  return (
    <div>
      <BrowserRouter>
        <Navbar cartNum={cartNum} />
        <Routes>
          <>
            <Route
              path='/'
              element={<Home proizvod={proizvod} products={products} onAdd={addToCart} onDelete={deleteFromCart} />}
            />
            <Route
              path='/voce'
              element={
                <div className='container'>
                  <div className="category-filter">
                   <CategoryFilter categories={voceCategories} selectedCategory={selectedVoceCategory} onSelectCategory={setSelectedVoceCategory} />
                    <PriceRangeFilter selectedPriceRange={selectedVocePriceRange} onSelectPriceRange={setSelectedVocePriceRange} />
                    </div>
                  <Voce voce={filteredVoce} onAdd={addToCart} onDelete={deleteFromCart} resetCategory={resetVoceCategory} selectedCategory={selectedVoceCategory} selectedPriceRange={selectedVocePriceRange} resetPrice={resetVocePriceRange}/>
                </div>
              }
            />
            <Route
              path='/povrce'
              element={
                <div className='container'>
                  <div className="category-filter">
                    <CategoryFilter categories={povrceCategories} selectedCategory={selectedPovrceCategory} onSelectCategory={setSelectedPovrceCategory} />
                    <PriceRangeFilter selectedPriceRange={selectedPovrcePriceRange} onSelectPriceRange={setSelectedPovrcePriceRange} />
                  </div>
                  <Povrce povrce={filteredPovrce} onAdd={addToCart} onDelete={deleteFromCart} resetCategory={resetPovrceCategory} selectedCategory={selectedPovrceCategory} selectedPriceRange={selectedPovrcePriceRange} resetPrice={resetPovrcePriceRange} />
                </div>
              }
            />
            <Route path='/recepti' element={<Recepti />} />
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
