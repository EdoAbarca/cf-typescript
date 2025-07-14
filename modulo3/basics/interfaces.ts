
interface Person {
    name: string;
    age: number;
    dni: string | number;
    isEmployed: boolean;
    description?: string;
    greet: () => string;
}

let person: Person = {
    name: "Eduardo",
    age: 30,
    dni: "12345678",
    isEmployed: true, //oh...
    description: "Software Developer",
    greet: () => {
        return `Hello! My name is ${person.name}, I am ${person.age} years old and my DNI is ${person.dni}.`;
    },
}
