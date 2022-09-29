const variable = 4;
console.log(variable);

class Person {
    constructor(firstName, lastName, age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    saludar(){
        return `Hola soy ${this._firstName} ${this._lastName} y tengo ${this._age} años`;
    }
}

const person1 = new Person();

console.log(person1)