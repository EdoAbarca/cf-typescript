# Modulo 5

## Clase 1

Un Namespace es una manera de agrupar código relacionado lógicamente, como clases, interfaces, funciones y variables, bajo un mismo nombre. Esto ayuda a organizar el código, evitar conflictos de nombres y mejorar la estructura de aplicaciones grandes. 

>No son tan utilizados (quizás proyecto legacy), se prefieren los módulos.

```typescript
//namespaces.ts
namespace DBEntity {
    export class User {
        constructor(public name: string) {}
    }
    
    const myUser = new User("John Doe");
    console.log(myUser.name); // Output: John Doe
}

//index.ts
/// <reference path="namespaces.ts" />

const myOtherUser = new DBEntity.User("Jane Doe");
console.log(myOtherUser.name); // Output: Jane Doe
```

## Clase 2

Un módulo es un archivo que contiene código y declaraciones (como clases, funciones, interfaces, variables, etc.) que pueden ser importadas y usadas en otros archivos o módulos. Los módulos ayudan a organizar el código en unidades lógicas y reutilizables, mejorando la mantenibilidad y la escalabilidad de las aplicaciones.

```typescript
//utils.module.ts
export const PI = 3.14;

//index.ts
import { PI } from "./utils.module";

const myNumber = 10 * PI;
```