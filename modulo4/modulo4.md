# Modulo 4

## Clase 1

### Clases en TypeScript

Una **clase** es una estructura que permite modelar tipos de datos personalizados, incluyendo lógica interna y encapsulación. A diferencia de las interfaces, las clases pueden contener implementaciones de métodos y gestionar el estado de sus propiedades.

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

#### Herencia

Las clases pueden extender otras clases para reutilizar y especializar su comportamiento. Esto se logra mediante la herencia:

```typescript
class Dog extends Animal {
	setDogName(name: string) {
		this.setName(name);
	}

	getDogName() {
		return this.getName();
	}

	// Sobrescribiendo el método cry
	cry() {
		super.cry();
		console.log("*barking sounds*");
	}
}

const myDog = new Dog();
myDog.setDogName("Galaxy Annihilator");
myDog.cry(); // Output: Galaxy Annihilator makes a sound. \n *barking sounds*
```

---

## Clase 2

### Clase vs Interface

Las **interfaces** definen la forma de los objetos, pero no pueden contener lógica ni inicializar propiedades. Las **clases** pueden implementar interfaces para garantizar que cumplen con un contrato de estructura, además de poder definir lógica interna.

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

const myCat = new Cat("Whiskers");
myCat.cry(); // Whiskers meows.
```

---

## Clase 3

### Funciones en TypeScript

Una **función** es un bloque de código reutilizable que puede recibir parámetros y retornar valores.

```typescript
const hi = (name: string) => {
	console.log(`Hello, ${name}!`);
}

function goodbye(name: string): void {
	console.log(`Goodbye, ${name}!`);
}

function show(): void {
	console.log("This is a function without parameters or return value.");
}
```

#### Ejemplo de uso de objetos y destructuración

```typescript
const response = {
	status: 200,
	message: "OK",
	data: {
		id: 1,
		name: "Sample Data"
	}
}

function showResponse({status, data}: {status: number, data: {id: number, name: string}}): void {
	console.log(`Status: ${status}`);
	console.log(`Data ID: ${data.id}`);
	console.log(`Data Name: ${data.name}`);
}

// Destructuración con el operador rest (...)
const { message, ...rest } = response;
console.log("Message:", message);
console.log("Rest:", rest);
```