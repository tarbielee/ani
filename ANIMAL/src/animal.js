"use strict";

class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        return "sound";
    }
    eats() {
        return this.name + " eats";
    }
}

class Cat extends Animal {
    sound() {
        return "Cat meows";
    }
}

class Dog extends Animal {
    sound() {
        return "Dog barks";
    }
    
}

let cat = new Cat("Stormy");
let dog = new Dog("Rax");


module.exports ={
    Animal
}
