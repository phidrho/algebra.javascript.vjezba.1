// zadatak 1
var x = "John Doe"; 
function vratiNesto(name) {
   var x = name;
   function f() { return x; }
   return f;
}
var y = vratiNesto("Jane Doe");
console.log(y);

var z = vratiNesto()();
console.log(z);
console.log(vratiNesto("Goran")());


// zadatak 2
var nase_ime = 'neko ime';

(function vratiNesto2(name) {
   var x = name;
   function f() {
      return x;
   };
   return f;
})(nase_ime);
