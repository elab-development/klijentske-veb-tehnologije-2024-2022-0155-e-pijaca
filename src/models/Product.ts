export class Product {
    id: number;
    ime: string;
    opis: string;
    kolicina: number;
    jedinica:string;
    family: string;
    cena: number;



   constructor(id: number, ime: string, opis: string, kolicina: number,jedinica: string, family: string,cena: number) {
    this.id = id;
    this.ime = ime;
    this.opis = opis;
    this.kolicina = kolicina;
    this.jedinica=jedinica;
    this.family=family;
    this.cena=cena;
  }
}