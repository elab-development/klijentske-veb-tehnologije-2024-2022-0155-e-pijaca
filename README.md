Instrukcije za povlačenje projekta:
1. Na desktop-u kreirati prazan folder sa proizvoljnim nazivom
2. Kreirani folder otvoriti u VisualStudioCode-u
3. Pokrenuti novi terminal i u njemu kucati sledeću komandu:
    git clone 
4. Pre pokretanja projekta potrebno je u terminalu izvršiti komandu: npm install da bi se sve potrebne zavisnosti instalirale
5. Zatim možete pokrenuti projekat komandom: npm run dev

Kratak opis projekta
Online aplikacija za kupovinu proizvoda sa pijace. Na početnoj stranici korisniku se prikazuje katalog svih proizvoda kao i najaktuelniji proizvodi ove sezone. Klikom na naziv proizvoda otvara se nova stranica na kojoj je dat kratak opis proizvoda sa funkcionalnim button-ima za dodavanje ili izbacivanje proizvoda iz korpe. U navbar-u korisnik može pristupiti pojedinačnim stranicama Voće, Povrće, Recepti i Login. Na stranici Voće i Povrće nalaze se dodatni filteri proizvoda gde je korisniku omogućeno filtriranje proizvoda po ceni i kategoriji proizvoda. Stranica Recepti povlači podatke sa RapidApi-a i prilikom svakog refresh-a korisniku se prikazuju novi recepti. Korisniku je omoguceno registrovanje na sajt putem stranice LogIn/SignUp. Na stranici Cart nalaze se podaci o korisniku, njegovo ime i email, kao i proizvodi koje je dodao u korpu.