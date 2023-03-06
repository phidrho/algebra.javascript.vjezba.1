let mojH1 = document.querySelector("h1");
console.log(mojH1);
console.log(mojH1.textContent);

mojH1.innerText = 'Karlovac';

let spanUH3 = document.querySelector(".description span");

console.log(spanUH3);
console.log(spanUH3.textContent);

spanUH3.outerHTML = '<h3>5 rijeka</h3>';

let divInfo = document.querySelector(".info");
console.log(divInfo);
console.log(divInfo.textContent);
divInfo.innerText = 'Peta rijeka je pivo.';

let footerUl = document.getElementById("footer").firstElementChild;
console.log(footerUl);
console.log(footerUl.textContent);
console.log(footerUl.children);
let footerUlLi = footerUl.children;

let rijeke = ['Dobra', 'Korana', 'Kupa', 'Mrežnica', 'Karlovačko'];

for (let i = 0; i < footerUlLi.length; i++) {
    footerUlLi[i].innerText = rijeke[i];
}
