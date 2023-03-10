function Dog() {
    this.hasSat = false;

    this.bark = function() {
        return "Wuf Wuf";
    }

    this.doSit = function() {
        this.hasSat = true;
    }
}

var dog = new Dog();
dog.bark();
console.log(dog.bark());
console.log(dog.hasSat);

dog.hasSat = true;
console.log(dog.hasSat);

dog.hasSat = false;
console.log(dog.hasSat);

dog.doSit();
console.log(dog.hasSat);
