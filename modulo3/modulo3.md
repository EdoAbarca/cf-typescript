# Módulo 3

## Clase 1

Un Enum es un tipo de dato que permite listar datos estáticos.

```typescript
enum Users {
    NormalUser,
    PaidUser,
    AdminUser,
    MegaUser,
}

const myUser = Users.AdminUser;
console.log(myUser);
```

Se le pueden asignar valores. Por defecto, los valores de ese enum van así: 0,1,2,3.

>Nota: Los Enum no existen en JavaScript. Ver "dist/enums.js" para contrastar con "basics/enums.ts".

## Clase 2

Las interfaces (Interface) son un tipo de dato que funciona como plantilla para crear y validar tipos de datos. También sirven para describir funciones (POO).

```typescript
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

```