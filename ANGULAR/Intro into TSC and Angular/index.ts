class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return `${this.name} says hello!`;
  }
}

const userGreeting = new Person('Peter');
console.log(userGreeting.sayHello());

export {};
