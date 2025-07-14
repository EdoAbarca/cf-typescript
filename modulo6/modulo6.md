# Módulo 6

# Clase 1

Los Generics, o genéricos, son una forma de escribir componentes que funcionan con una variedad de tipos de datos en lugar de un solo tipo. Permiten que las funciones, clases o interfaces sean más reutilizables y menos restrictivas en cuanto a los tipos con los que pueden operar, sin perder la seguridad de tipo que TypeScript proporciona.

```typescript
// Una función genérica que devuelve el primer elemento de un arreglo
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

let numbers = [1, 2, 3];
let firstNumber = getFirstElement(numbers); // firstNumber es de tipo number

let strings = ["hello", "world"];
let firstString = getFirstElement(strings); // firstString es de tipo string

interface User {
    id: number;
    name: string;
}

let users: User[] = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
let firstUser = getFirstElement(users); // firstUser es de tipo User
```

# Clase 2

Los Mapped Types son una característica de TypeScript que te permite crear nuevos tipos basándote en tipos existentes. Funcionan iterando sobre las propiedades de un tipo y aplicando una transformación a cada propiedad. 

```typescript
interface UserProfile {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Mapped Type para hacer todas las propiedades de un tipo opcionales
type MyPartial<T> = { //Partial arrojó error de duplicado
    [P in keyof T]?: T[P];
};

type OptionalUserProfile = MyPartial<UserProfile>;
/*
// OptionalUserProfile será equivalente a:
type OptionalUserProfile = {
    id?: number;
    name?: string;
    email?: string;
    age?: number;
};
*/

// Mapped Type para hacer todas las propiedades de un tipo de solo lectura
type MyReadonly<T> = { //Readonly arrojó error de duplicado
    readonly [P in keyof T]: T[P];
};

type ReadonlyUserProfile = MyReadonly<UserProfile>;
/*
// ReadonlyUserProfile será equivalente a:
type ReadonlyUserProfile = {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly age: number;
};
*/

//TODO: Hacer ejemplo CRUD con mappedTypes y generics
```