'use strict';
// 1.
//a = 78;
var a = 78;

//var b = 034;
var b = 34;

//delete a;
//delete window.b;
var myObject = {property1: 1, property2: 2, property1: 1};

// 2.
const users = [
    {name: 'Fabio', surname: 'Biondi'},
    {name: 'Mario', surname: 'Rossi'},
];
const user = {name: 'Lorenzo', surname: 'Verdi'};

var noviUseri = [...users, user];

noviUseri.map(user => console.log(user['name']));

// 3.
for(var i = 0; i < 10; i++){
    setTimeout(function(){
        console.log('The number is ' + i);
    }, (1000 + i*1000));
}

//console.log(i);
