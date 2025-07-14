# Módulo 3

## Clase 1

Un Enum es un tipo de dato que permite listar datos estáticos y asignarles valores personalizados. Los enums facilitan la legibilidad y el mantenimiento del código cuando se trabaja con conjuntos de valores relacionados.

```typescript
enum Users {
    NormalUser,      // 0
    PaidUser,        // 1
    AdminUser,       // 2
    MegaUser         // 3
}

const myUser = Users.AdminUser;
console.log(myUser); // Imprime 2
```

También puedes asignar valores específicos a cada elemento:

```typescript
enum Status {
    Pending = 1,
    InProgress = 3,
    Completed = 5
}

console.log(Status.Completed); // Imprime 5
```

>Nota: Los Enum no existen en JavaScript. TypeScript los transpila a objetos en JS. Ver "dist/enums.js" para contrastar con "basics/enums.ts".

---

## Clase 2

Las interfaces (`interface`) definen la forma de los objetos, permitiendo validar que los datos cumplen con una estructura específica. Son ideales para describir contratos en clases y objetos complejos.

```typescript
interface Person {
    name: string;
    age: number;
    dni: string | number;
    isEmployed: boolean;
    description?: string; // Propiedad opcional
    greet: () => string;  // Método
}

let person: Person = {
    name: "Eduardo",
    age: 30,
    dni: "12345678",
    isEmployed: true,
    description: "Software Developer",
    greet: function() {
        return `Hello! My name is ${this.name}, I am ${this.age} years old and my DNI is ${this.dni}.`;
    }
}
```

Las interfaces pueden extender otras interfaces, permitiendo reutilizar y combinar estructuras:

```typescript
interface Employee extends Person {
    employeeId: number;
    department: string;
}

const employee: Employee = {
    name: "Ana",
    age: 28,
    dni: "87654321",
    isEmployed: true,
    employeeId: 101,
    department: "IT",
    greet: function() {
        return `Hi, I'm ${this.name} from ${this.department}.`;
    }
}
```

---

## Clase 3

Los *custom type* (`type`) permiten crear alias de tipos, uniones, intersecciones y estructuras complejas. Son útiles para definir tipos flexibles y reutilizables.

```typescript
type ServiceResponse = string | null | number | undefined;
type UserType = "SuperUser" | "User" | "Guest";

// Ejemplo de uso en funciones
function handleResponse(response: ServiceResponse) {
    if (typeof response === "string") {
        return response.toUpperCase();
    }
    return response;
}

type UserCharges = "SuperUser" | "User" | "Guest";
const myUserType: UserCharges = "SuperUser";
```

También puedes combinar tipos usando intersecciones:

```typescript
type Address = {
    street: string;
    city: string;
};

type Customer = Person & Address;

const customer: Customer = {
    name: "Luis",
    age: 40,
    dni: "11223344",
    isEmployed: false,
    street: "Av. Siempre Viva",
    city: "Springfield",
    greet: () => "Hola!"
};
```

---

## Clase 4

¿Cuando usar *Interface* y cuando usar *type* en TypeScript?

**Interface:**
- Ideal para describir la estructura de objetos y clases.
- Permite herencia y extensión (`extends`, `implements`).
- Mejor interoperabilidad con herramientas y librerías TypeScript.

**Type:**
- Útil para crear alias, uniones, tuplas, funciones, y tipos primitivos.
- Permite composición avanzada (uniones, intersecciones).
- No soporta herencia, pero sí composición.

```typescript
// Interface: ideal para objetos y clases
interface Persona {
  nombre: string;
  edad: number;
}

// Extensión de interfaces
interface Trabajador extends Persona {
  puesto: string;
}

// Type: ideal para alias y uniones
type ID = string | number;
type PersonaAlias = {
  nombre: string;
  edad: number;
};

// Unión de tipos
type Resultado = "ok" | "error" | null;

// Intersección de tipos
type TrabajadorAlias = PersonaAlias & { puesto: string };
```

**Resumen:**  
Usa `interface` para estructuras orientadas a objetos y clases, y `type` para alias, uniones, intersecciones y tipos más flexibles.