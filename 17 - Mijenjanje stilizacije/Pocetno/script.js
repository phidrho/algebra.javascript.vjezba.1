/* ZAD 1: umjesto circle buleta na elementima liste prikažu redne brojke */
let mojaLista = document.querySelector("footer ul");

mojaLista.style.listStyleType = "decimal";


/* ZAD 2: div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet) */
let divInfo = document.querySelector(".info");

divInfo.classList.add("hide"); // dodali smo u CSS klasu hide da sakrije - display: none;


/* ZAD 3: saznajte margin-left izračunati stil koji je primijenjen na body elementu */
let mojBody = document.querySelector("body");
let izracunaniStilZaBody = window.getComputedStyle(mojBody, null);

// varijanta 1
console.log("Margin left je: ", izracunaniStilZaBody.marginLeft);
// varijanta 2
console.log("Margin left je: ", izracunaniStilZaBody.getPropertyValue("margin-left"));


/* ZAD 4: animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji */
let bodyMargina = parseInt(izracunaniStilZaBody.getPropertyValue("margin"));
console.log(bodyMargina);

let animacija = setInterval(funcFrame, 500);
let unazad = true;

function funcFrame() {
    if(unazad == true) {
        bodyMargina--;
    } else {
        bodyMargina++;
    }

    if(bodyMargina == 30) {
        unazad = true;
        console.log("<<<<<<<")
    }

    if (bodyMargina == 0)  {
        unazad = false;
        console.log(">>>>>>>")
    }
    
    mojBody.style.margin = bodyMargina + "px";
}
