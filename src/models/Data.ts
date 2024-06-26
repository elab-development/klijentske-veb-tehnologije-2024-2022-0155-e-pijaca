import Proizvod from './Proizvod';
import { Product } from './Product';

export const proizvod: Proizvod[] = [
  new Proizvod(2, 'Maline', 'Malina spada u voće iz porodice ruža i može se naći nekoliko vrsta – crna, ljubičasta i zlatna, a najčešća je ona koju poznajemo i koristimo, crvena.  Aktivno učestvuju u zaštititi od dijabetesa, raka, gojaznosti, artritisa i drugih stanja, mogu da pomognu i u dijetalnim režimima ishrane, ali i da uspore starenje.'
    , 150, 'g', 'bobičasto voće', 199.99),
  new Proizvod(1, 'Borovnica', 'Borovnica ili crna borovnica, borovinka, borovnjača, crna jagoda, brusnica i mrča (lat. Vaccinium myrtillus)[1] je žbunasta biljka[2] iz porodice vresova (Ericaceae). Naučni naziv je izveden od latinskih reči bacca = bobica i myrtus (deminutiv myrtillus) po sličnosti listova sa biljkom mirtom.'
    , 100, 'g', 'bobičasto voće', 249.99),
    new Proizvod(10, 'Krompir', 'Krompir je bogat vitaminom C. Pomaže kod udaraca, opekotina, osteoporoze, poremećaja nerava, visokog pritiska i otoka.'
      , 100, 'g', 'korenasto povrće', 109.99),
    new Proizvod(11, 'Šargarepa', 'Šargarepa je bogata vitaminom A, C i B. Ima blagotvorno dejstvo na kožu. Konzumiranje šargarepe pojačava imuni sistem, poboljšava vid, pamćenje, štiti od upala i oboljenja srca i krvnih sudova.'
      , 100, 'g', 'korenasto povrće', 64.99)
];

export const voce: Product[] = [
  new Product(2, 'Maline', 'Malina spada u voće iz porodice ruža i može se naći nekoliko vrsta – crna, ljubičasta i zlatna, a najčešća je ona koju poznajemo i koristimo, crvena.  Aktivno učestvuju u zaštititi od dijabetesa, raka, gojaznosti, artritisa i drugih stanja, mogu da pomognu i u dijetalnim režimima ishrane, ali i da uspore starenje.'
    , 150, 'g', 'bobičasto voće', 199.99),
  new Product(1, 'Borovnica', 'Borovnica ili crna borovnica, borovinka, borovnjača, crna jagoda, brusnica i mrča (lat. Vaccinium myrtillus)[1] je žbunasta biljka[2] iz porodice vresova (Ericaceae). Naučni naziv je izveden od latinskih reči bacca = bobica i myrtus (deminutiv myrtillus) po sličnosti listova sa biljkom mirtom.'
    , 100, 'g', 'bobičasto voće', 249.99),
  new Product(3, 'Limun', 'Limun (lat. Citrus x limon) je drvo iz roda Citrus (porodica rutvice (Rutaceae)) i njegov plod. Rezultat je davnog ukrštanja po svoj prilici pomela i citrona, ali već vekovima uspeva kao samostalno drvo koje se razmnožava reznicama ili kalemljenjem.'
    , 100, 'g', 'citrus', 124.99),
  new Product(4, 'Orah', 'Orah (lat. Juglans regia) vrsta je oraha Starog svijeta koja se može naći na prostoru od Balkanskog poluostrva do Himalaja i jugozapadne Kine. Uzgaja se širom Evrope.'
    , 100, 'g', 'jezgrasto voće', 399.99),
  new Product(5, 'Badem', 'Sirovi bademi su dobar izvor vitamina E, kalcijuma, fosfora, gvožđa i magnezijuma. Sadrži i cink, selen, bakar i nijacin. U odnosu na ostale orašaste plodove badem je jedan od najhranljivijih.'
    , 100, 'g', 'jezgrasto voće', 199.99),
  new Product(6, 'Trešnje', 'U Japanu postoji tradicija koja se zove "Hanamija" koja podrazumeva ispijanje sakea (japanske vrste rakije) ispod drveta sakure ili ume, tj. ispod drveta autohtonih vrsta trešanja. Sa ovom tradicijom Japanci su krenuli još 710. godine a poštuju je i danas. '
    , 100, 'g', 'koštuničavo voće', 59.99)
];

export const povrce: Product[] = [
  new Product(7, 'Pasulj', 'Pasulj ili grah je naziv za seme nekoliko biljaka iz porodice mahunarki (Fabaceae). Postoji oko 70 vrsta ovog povrća. To je jednogodišnja zeljasta biljka koja sazreva u jesen. Kao i sve mahunarke, sadrži mnogo belančevina, ali su one fiziološki nepotpune'
    , 100, 'g', 'mahunasto povrće', 259.99),
  new Product(8, 'Spanać', 'Spanać je na evropsku trpezu dospeo tek u 11. veku, kada su ga Mavari doneli u Španiju. Veruje se da ova biljka potiče iz Persije, a da je u Kinu dospela u 7. veku nakon što je tamo, kao dar, poslao kralj Nepala. '
    , 100, 'g', 'lisnato povrće', 89.99),
  new Product(9, 'Blitva', 'Blitva, kao i drugo zeleno lisnato povrće, ima veoma hranljive listove, što je čini popularnom komponentom zdrave ishrane.[3] Blitva se koristila u kuvanju vekovima, ali pošto je ista vrsta kao i cvekla, i slična povrću kao što je artičoka, uobičajeni nazivi koje kuvari i kulture koriste za blitvu mogu biti zbunjujući'
    , 100, 'g', 'lisnato povrće', 79.99),
  new Product(10, 'Krompir', 'Krompir je bogat vitaminom C. Pomaže kod udaraca, opekotina, osteoporoze, poremećaja nerava, visokog pritiska i otoka.'
    , 100, 'g', 'korenasto povrće', 109.99),
  new Product(11, 'Šargarepa', 'Šargarepa je bogata vitaminom A, C i B. Ima blagotvorno dejstvo na kožu. Konzumiranje šargarepe pojačava imuni sistem, poboljšava vid, pamćenje, štiti od upala i oboljenja srca i krvnih sudova.'
    , 100, 'g', 'korenasto povrće', 64.99),
  new Product(12, 'Grašak', 'Grašak se smatra jednom od najhranljivijih vrsta povrća. U ishrani se upotrebljavaju njegove mahune i zelena zrna, koja su naročito bogata proteinima i mineralnim materijama, i zato u našem jelovniku ovo povrće treba da zauzme značajno mesto. '
    , 100, 'g', 'mahunasto povrće', 199.99)
];

export const getFruitById = (id: number): Product | undefined => {
  return voce.find(product => product.id === id);
};


export const getVegetableById = (id: number): Product | undefined => {
  return povrce.find(product => product.id === id);
}
export const getPopularById = (id: number): Proizvod | undefined => {
  return proizvod.find(product => product.id === id);
}

export const voceCategories: string[] = [
  'bobičasto voće',
  'jezgrasto voće',
  'citrus',
  'koštuničavo voće'
];

export const povrceCategories: string[] = [
  'mahunasto povrće',
  'lisnato povrće',
  'korenasto povrće',
  'krtolasto povrće'
];

export const products: Product[] = [...voce, ...povrce];
