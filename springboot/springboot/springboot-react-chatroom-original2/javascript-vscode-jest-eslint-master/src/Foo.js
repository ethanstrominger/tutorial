function getFoo() {
  return 'Foo!';
}

function sayHello(name) {
  return 'Hello ' + name;
}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  something = 'x';

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p = new Person('A', 'B');
console.log(p.fullName());

// export {fibonacci, getFoo, Person}
module.exports = { getFoo, sayHello, Person };
