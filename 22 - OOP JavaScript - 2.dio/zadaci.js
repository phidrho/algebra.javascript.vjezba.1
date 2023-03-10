function Dog(name) {
    this.name = name ? name : "Rex";
    this.getName = function() {
        return this.name;
    }
}

var pas = new Dog();
console.log(pas.name);

var psic = new Dog("Floki");
console.log(psic.name);

var cuko = new Dog("Cufi");
console.log(cuko.getName());




function Pas() {
    this.name = "Rex";
    this.setName = function(novoIme) {
        this.name = novoIme;
    }
    this.getName = function() {
        return this.name;
    }
}

var dzukela = new Pas();
console.log(dzukela.getName());
dzukela.setName("Bfro");
console.log(dzukela.getName());

Pas.prototype.setColor = function(boja) {
    this.color = boja;
}

dzukela.setColor("smeđi");
console.log(dzukela.color);
