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

    saltar(){
        return `Estoy saltando`
    }
}

const person1 = new Person("Angelica", "Rodriguez", "20");

console.log(person1.saludar())
console.log(person1.saltar())
console.log(person1._age);
console.log(person1._firstName)


const person2 = new Person("Pedro", "García", "44");
const saludo = person2.saludar();

console.log(person2);
console.log(saludo);