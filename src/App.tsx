import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginSignup from './Components/Prijava/LoginSignup';
import Login from './Components/Prijava/Login';
import Proizvod from './models/Proizvod';
import { Product } from './models/Product';
import Voce from './Components/Voce';
import Povrce from './Components/Povrce';
import CategoryFilter from './Components/CategoryFilter';
import { useEffect, useState } from 'react';
import Cart from './Components/Cart';

const proizvod: Proizvod[] = [
  new Proizvod(1, 'borovnica', 249.99, 150, 'g'),
  new Proizvod(2,  'maline', 199.99, 150, 'g'),
  new Proizvod(3,  'sargarepa', 79.99, 1, 'kg'),
  new Proizvod(4,  'krompir', 89.99, 1, 'kg')
];

const voce: Product[]=[
  new Product(2,'maline','U mnogim zemljama se plod koristi u naučnoj medicini kao sredstvo za izbacivanje tečnosti, kod proliva i ekcema. Ekstrakt iz ploda deluje protiv virusa. Pored toga on aktivira gušterača na lučenje insulina pa time snižava šećer u krvi. Koristi se i u prehrambenoj industriji.'
    , 150,'g','bobicasto voce',199.99),
  new Product(1,'borovnica','Borovnica ili crna borovnica, borovinka, borovnjača, crna jagoda, brusnica i mrča (lat. Vaccinium myrtillus)[1] je žbunasta biljka[2] iz porodice vresova (Ericaceae). Naučni naziv je izveden od latinskih reči bacca = bobica i myrtus (deminutiv myrtillus) po sličnosti listova sa biljkom mirtom.'
    , 100,'g','bobicasto voce',249.99),
  
  new Product(3,'limun','Limun (lat. Citrus x limon) je drvo iz roda Citrus (porodica rutvice (Rutaceae)) i njegov plod. Rezultat je davnog ukrštanja po svoj prilici pomela i citrona, ali već vekovima uspeva kao samostalno drvo koje se razmnožava reznicama ili kalemljenjem.'
    , 100,'g','citrus',124.99),
    new Product(4,'orah','Orah (lat. Juglans regia) vrsta je oraha Starog svijeta koja se može naći na prostoru od Balkanskog poluostrva do Himalaja i jugozapadne Kine. Uzgaja se širom Evrope.'
    , 100,'g','jezgrasto voce',399.99),
    new Product(5,'badem','Sirovi bademi su dobar izvor vitamina E, kalcijuma, fosfora, gvožđa i magnezijuma. Sadrži i cink, selen, bakar i nijacin. U odnosu na ostale orašaste plodove badem je jedan od najhranljivijih.'
    , 100,'g','jezgrasto voce',199.99),
    new Product(6,'tresnja','U Japanu postoji tradicija koja se zove "Hanamija" koja podrazumeva ispijanje sakea (japanske vrste rakije) ispod drveta sakure ili ume, tj. ispod drveta autohtonih vrsta trešanja. Sa ovom tradicijom Japanci su krenuli još 710. godine a poštuju je i danas. '
    , 500,'g','kostunicavo voce',199.99)
];

const povrce: Product[]=[
  new Product(7,'pasulj','Pasulj ili grah je naziv za seme nekoliko biljaka iz porodice mahunarki (Fabaceae). Postoji oko 70 vrsta ovog povrća. To je jednogodišnja zeljasta biljka koja sazreva u jesen. Kao i sve mahunarke, sadrži mnogo belančevina, ali su one fiziološki nepotpune'
    , 100,'g','mahunasto povrce',199.99),
  new Product(8,'spanac','Spanać je na evropsku trpezu dospeo tek u 11. veku, kada su ga Mavari doneli u Španiju. Veruje se da ova biljka potiče iz Persije, a da je u Kinu dospela u 7. veku nakon što je tamo, kao dar, poslao kralj Nepala. '
    , 100,'g','lisnato povrce',89.99),
  
  new Product(9,'blitva','Blitva, kao i drugo zeleno lisnato povrće, ima veoma hranljive listove, što je čini popularnom komponentom zdrave ishrane.[3] Blitva se koristila u kuvanju vekovima, ali pošto je ista vrsta kao i cvekla, i slična povrću kao što je artičoka, uobičajeni nazivi koje kuvari i kulture koriste za blitvu mogu biti zbunjujući'
    , 100,'g','lisnato povrce',79.99),
    new Product(10,'krompir','Krompir je bogat vitaminom C. Pomaže kod udaraca, opekotina, osteoporoze, poremećaja nerava, visokog pritiska i otoka.'
    , 100,'g','korenasto povrce',109.99),
    new Product(11,'sargarepa','Šargarepa je bogata vitaminom A, C i B. Ima blagotvorno dejstvo na kožu. Konzumiranje šargarepe pojačava imuni sistem, poboljšava vid, pamćenje, štiti od upala i oboljenja srca i krvnih sudova.'
    , 100,'g','korenasto povrce',64.99),
    new Product(12,'grasak','Grašak se smatra jednom od najhranljivijih vrsta povrća. U ishrani se upotrebljavaju njegove mahune i zelena zrna, koja su naročito bogata proteinima i mineralnim materijama, i zato u našem jelovniku ovo povrće treba da zauzme značajno mesto. '
    , 100,'g','mahunasto povrce',199.99)
];

const voceCategories=[
  'bobicasto voce',
  'jezgrasto voce',
  'citrus',
  'kostunicavo voce'
];
const povrceCategories = [
  'mahunasto povrce',
  'lisnato povrce',
  'korenasto povrce'
];

const products: Product[]=[...voce,...povrce];

function App() {

  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  function refreshCart() {
    const dodajUKorpu: Product[] = products.filter((prod) => prod.kolicina > 0);
    setCartProducts(dodajUKorpu);
  }

  function updateCart(product: Product) {

    setCartProducts([...cartProducts, product]);
  } 

  const deleteFromCart = (id: number) => {
    products.forEach((product)=>{
      if (product.id === id  && cartNum>=1) {
        const a = cartNum - 1;
        setCartNum(a);
        if(product.kolicina > 1) {
          updateCart(product);
        }
        else {
          refreshCart();
        }
      }
    });
  };

  
  const addToCart = (id: number) => {
    products.forEach((product)=>{
      if (product.id === id) {
        const a = cartNum + 1;
        setCartNum(a);
        if(product.kolicina === 1) {
          updateCart(product);
        }
        else {
          refreshCart();
        }
      }
    });
  };


  const [selectedVoceCategory, setSelectedVoceCategory] = useState<string>('sve');
  const [selectedPovrceCategory, setSelectedPovrceCategory] = useState<string>('sve');

  useEffect(() => {
    return () => {
      setSelectedVoceCategory('sve');
      setSelectedPovrceCategory('sve');
    };
  }, [setSelectedVoceCategory,setSelectedPovrceCategory]);

  

  const filteredVoce = selectedVoceCategory === 'sve' ? voce : voce.filter(product => product.family === selectedVoceCategory);
  const filteredPovrce = selectedPovrceCategory === 'sve' ? povrce : povrce.filter(product => product.family === selectedPovrceCategory);
  

  
  return (
    <div>
      <BrowserRouter>
      <Navbar cartNum={cartNum}/>
     
      <Routes>
        {
          
          <>
          <Route path='/' element={<Home proizvod={proizvod} products={products} onAdd={addToCart} onDelete={deleteFromCart}/>} />
          <Route path='/voce' element={
            <div className='container'>
              <div className="category-filter">
                <CategoryFilter categories={voceCategories} selectedCategory={selectedVoceCategory} onSelectCategory={setSelectedVoceCategory} />
              </div>
              <Voce voce={filteredVoce} onAdd={addToCart} onDelete={deleteFromCart}/>
            </div>} />
          <Route path='/povrce' element={
            <div className='container'>
              <div className="category-filter">
                <CategoryFilter categories={povrceCategories} selectedCategory={selectedPovrceCategory} onSelectCategory={setSelectedPovrceCategory} />
              </div>
              <Povrce povrce={filteredPovrce} onAdd={addToCart} onDelete={deleteFromCart}/>
            </div>} />
          <Route path='/signup' element={<LoginSignup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart proizvodi={cartProducts} onAdd={addToCart} onDelete={deleteFromCart}/>} />
          </>
         
          
        }
        
      </Routes>
      </BrowserRouter>

     
      
    </div>
  );
}

export default App;
