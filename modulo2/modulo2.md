# Modulo 2

## Clase 1

Para declarar variables, se puede seguir el estilo de JavaScript:

```typescript
let age = "20";
console.log(age); //20
```

Sin embargo, la gracia de TypeScript es especificar qué tipo de dato es la variable usada:

```typescript
let age:String = "20";
console.log(age); //20
```

Aunque también se puede caer en esto:

```typescript
let response: any = "Hola";
response = 42; 
response = true; 
response = { message: "Hello" }; // 'any' type allows any value
```

Y así.

## Clase 2

```typescript

function greet(): void {
  console.log("Hello, TypeScript!");
}  
```

*void* se especifica para una función que no tiene retorno.

```typescript
let response2: unknown;
response2 = true;

if (response2){
    console.log("Response is truthy");
}
```

*unknown* se especifica para un tipo de dato que no se sabe qué será exactamente, lo que implica que no se pueden usar métodos hasta que se valide qué tipo de dato es.

```typescript
let response3: null;
let response4: undefined;
```

- **null**: Representa la ausencia intencional de cualquier valor. Se asigna explícitamente para indicar que una variable no tiene valor.
- **undefined**: Indica que una variable ha sido declarada pero aún no se le ha asignado ningún valor. Es el valor por defecto de las variables no inicializadas.


# Clase 3

```typescript
let response5: number | null;
response5 = 20;
response5?.toString();
```

El operador `|` permite definir una variable que puede aceptar más de un tipo de dato, en este caso `number` o `null`. Esto se conoce como un "tipo unión". Es útil cuando una variable puede tener diferentes valores posibles, por ejemplo, un número o la ausencia de valor (`null`).  
El operador `?.` (encadenamiento opcional) se utiliza para llamar métodos o acceder a propiedades solo si la variable no es `null` ni `undefined`, evitando errores en tiempo de ejecución.

```typescript
type ResponseTypeService = number | undefined;

let responseProduct: ResponseTypeService;
let responsePartner: ResponseTypeService;
```

*ResponseTypeService* permite combinar tipos de datos.


# Clase 4

```typescript
let message: any = "";
let messageUppercase: <string> message;
messageUppercase.toUpperCase();
```

Type assertion (Casteo de elementos) en TypeScript permite al desarrollador informar al compilador sobre el tipo específico de una variable en un momento dado. Es útil cuando sabes más sobre el tipo de dato que el propio compilador.