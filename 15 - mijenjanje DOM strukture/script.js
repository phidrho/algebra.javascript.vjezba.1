// ZAD 1: DODAJEMO NA POČETAK H1 ELEMENT

var mojH1 = document.createElement("h1");
mojH1.innerHTML = "ovo je naš header";
// y.innerText = "ovo je naš header"; // druga varijanta za innerHTML

var div = document.getElementsByClassName("description")[0];
// console.log(div);

//var vanjskiElement = div.parentElement;
//console.log(vanjskiElement);

div.parentNode.insertBefore(mojH1, div);

// ZAD 2: ISPOD KLASE "description" DODATI DIV SA KLASOM "info"
var mojFooter = document.getElementById("footer1");
var divInfo = document.createElement("div");
divInfo.className = "info";
div.parentNode.insertBefore(divInfo, mojFooter);

// ZAD 3: DODATI 3 NOVA li ELEMENTA UNUTAR ul
for (let i = 0; i < 3; i++) {
    let mojUl = document.querySelector("#footer1 ul");
    mojUl.appendChild(document.createElement("li"));
}

console.log(mojUl);