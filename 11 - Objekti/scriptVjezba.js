var dog = {};
dog.breed = 'Golden reriever'; // dodijeljivanje svojstava ver. 1
dog['other breed'] = 'Chihuahua'; // dodijeljivanje svojstava ver. 2

console.log(dog);

var osoba = {};

osoba.ime = "Ivo";
osoba.prezime = "aaaa";
osoba.godina = 19;
osoba.brojCipela = 40;

if(osoba.brojCipela > 30) {
    console.log(`Ime i prezime + ${osoba.ime} + ${osoba.prezime}`);
}

// definiramo pomoću literala kao JSON (dvotočka umjesto jednako i zarez umjesto točkezareza)
var osobaLiteral = {
    ime : "Ivo",
    prezime : "aaaa",
    godina : 19,
    brojCipela : 40,
};

console.log(osobaLiteral);

// brišemo svojstvo
var isObrisano = delete osobaLiteral.prezime;
console.log(isObrisano);
console.log(osobaLiteral);

// pretvaramo u JSON
//var json = osoba.toJSON(); // NE RADI???
//console.log(osoba); // NE RADI???
//console.log(json); // NE RADI???

var json = JSON.stringify(osoba);
console.log(osoba);
console.log(json);
