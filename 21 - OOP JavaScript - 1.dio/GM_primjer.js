// constructor function
function Osoba () {
    this.ime = 'Ana';
    this.godine = 23;
}

// kreiranje objekata (new)
const osoba1 = new Osoba();
console.log("Ime: " + osoba1.ime + "; godine: " + osoba1.godine);
const osoba2 = new Osoba();
console.log("Ime: " + osoba2.ime + "; godine: " + osoba2.godine);

// dodavanje property-a na "Osoba" objekt/funkciju/konstruktor
Osoba.prototype.spol = "Ženski";

// prototype value od Osoba
console.log("Osoba 1 spol = ", osoba1.spol);
console.log("Osoba 2 spol = ", osoba2.spol);

//dodavanje metode na konstruktor funkcije
Osoba.prototype.pozdrav = function(){
    console.log("Bok", this.ime);
}

osoba1.pozdrav();
osoba2.pozdrav();

// mijenjamo property vrijednost za prototype "spol"
Osoba.prototype = {spol: "Muški"}
//Osoba.prototype = { spol: 'Muški', ime = 'Pero'} // OVO DEFINIRAMO SAMO U PROTOTIPU


//kreiramo novi objekt za osoba3
const osoba3 = new Osoba();

console.log(osoba3.ime, osoba3.spol);
console.log(osoba1.ime, osoba1.spol);
