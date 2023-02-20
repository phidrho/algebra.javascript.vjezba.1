var firstName = "Pero";
var lastName = "Perić";

var fullName = firstName + " " + lastName;
var fullName2 = `fullName2 ${firstName} ${lastName}`; //varijanta 2


console.log("firstName " + firstName);
console.log("lastName " + lastName);
console.log("fullName " + fullName);
console.log(fullName2);


var z = 2;
var y = 3;

var x = z === 2 ? y : 5;
console.log("x ternarni: " + x)

var x;
if (z === 2) {
    x = y;
} else {
    x = 5;
}

console.log("x raspisan: " + x)

for (var i = 1; i<=20; i++){
    if(i % 2 === 0){
        console.log("Broj " + i + " je paran.")
    } else {
        console.log("Broj " + i + " je neparan.")
    }
}