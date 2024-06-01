
interface TipArtikla {
  id: number;
  ime: string;
  cena: number;
  količina: number;
  jedinica: string;
}

class Proizvod implements TipArtikla {
  id: number;
  ime: string;
  cena: number;
  količina: number;
  jedinica: string;

  constructor(id: number, ime: string,  cena: number, količina: number, jedinica: string) {
    this.id = id;
    this.ime = ime;
    this.cena = cena;
    this.količina = količina;
    this.jedinica = jedinica;
  }


}



export default Proizvod;
