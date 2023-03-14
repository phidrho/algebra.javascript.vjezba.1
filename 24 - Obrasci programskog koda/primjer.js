// PRIMJER 1 - prema slajdovima
var sc = require('./step_counter');

console.log(sc.koraci);
sc.walk();
console.log(sc.getTotalSteps());

sc.walk();
sc.walk();
console.log(sc.getTotalSteps());

// PRIMJER 2 - s privatnim metodama
var sc2 = require('./step_counter2');

//console.log(sc2.koraci);
//sc2.stepUp(); // privatna metoda, očekujemo exception
sc2.walk();
console.log(sc2.getTotalSteps());

sc2.walk();
sc2.walk();
console.log(sc2.getTotalSteps());
