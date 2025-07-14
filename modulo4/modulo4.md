# Modulo 4

## Clase 1

Una clase es un tipo de dato que funciona como un contrato para modelar tipos de datos personalizados. A diferencia de las interfaces, una clase por si sola si puede tener lógica dentro de su contrato.

```typescript
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
```

Por otro lado, se pueden tomar las clases para extender su comportamiento:

```typescript
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
```

## Clase 2

Class vs Interface

Las clases pueden usar interfaces para definir el contrato de su estructura para su posterior implementación. Sin embargo, las interfaces no pueden implementar métodos ni inicializar variables: sólo pueden definirlos.

Por ejemplo:

```typescript
interface IAnimal {
	name: string;
	cry(): void;
}

class Cat implements IAnimal {
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	cry() {
		console.log(`${this.name} meows.`);
	}
}

const myCat = new Cat("Whiskers"); //New es un método propio de las clases
myCat.cry(); // Whiskers meows.
```


## Clase 3

