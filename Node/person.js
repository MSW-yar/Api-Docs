//Module Wrapper
// (function(modulw, require, exports, __filename, __dirname){

// })
console.log(__dirname, __filename);


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log(`${this.name}, ${this.age}`);        
    }
}
module.exports = Person;