class Animal {
  private name: string;

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  cry() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal();
dog.setName("Dog");
dog.cry(); // Output: Dog makes a sound.

//inheritance
class Dog extends Animal {
  constructor() {
    super();
  }
  setDogName(name: string) {
    this.setName(name);
  }

  getDogName() {
    return this.getName;
  }

  // Overriding the cry method
  cry() {
    this.cry();
    console.log("*barking sounds*");
  }
}

const myDog = new Dog();
myDog.setDogName("Galaxy Annihilator");
myDog.cry(); // Output: Galaxy Annihilator makes a sound.\n*barking sounds*