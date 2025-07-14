# Modulo 7

## Clase 1

El archivo tsconfig.json es un archivo fundamental en cualquier proyecto TypeScript. Es el archivo de configuración principal para el compilador de TypeScript (tsc). Este archivo le dice al compilador cómo debe compilar tu código TypeScript (.ts, .tsx, .d.ts) en JavaScript (.js).

Ejemplo de tsconfig.json:
```typescript
{
  "compilerOptions": {
    "target": "ES2020",                // Compilar a JavaScript moderno
    "module": "CommonJS",             // Usar sistema de módulos CommonJS
    "outDir": "./dist",               // Salida de los archivos JS en la carpeta 'dist'
    "rootDir": "./src",               // Archivos fuente TS están en la carpeta 'src'
    "strict": true,                   // Habilitar todas las opciones de verificación de tipo estrictas
    "esModuleInterop": true,          // Habilitar la interoperabilidad de módulos para importaciones/exportaciones
    "skipLibCheck": true,             // Ignorar errores de verificación de tipo en archivos de declaración (.d.ts) de librerías
    "forceConsistentCasingInFileNames": true // Forzar la consistencia en el uso de mayúsculas/minúsculas en los nombres de archivo
  },
  "include": [
    "src/**/*"                        // Incluir todos los archivos .ts y .tsx en la carpeta 'src'
  ],
  "exclude": [
    "node_modules",                   // Excluir la carpeta node_modules
    "**/*.spec.ts"                    // Excluir archivos de prueba
  ]
}
```

## Clase 2

En TypeScript, la revisión de la **compatibilidad de tipos** es un pilar fundamental para garantizar la robustez y predictibilidad de tu código. A diferencia de JavaScript, donde los errores de tipo a menudo se descubren solo en tiempo de ejecución, TypeScript los detecta en tiempo de compilación. Esto se logra mediante un proceso llamado **subtipado estructural**, también conocido como "duck typing" o "tipado de pato": "Si camina como pato y grazna como pato, entonces es un pato".

Esto significa que TypeScript se enfoca en la **forma o estructura de los tipos**, no en el nombre del tipo o en su herencia explícita. Para interfaces, enums, clases y tipos, esta compatibilidad estructural tiene implicaciones clave que debemos revisar cuidadosamente para evitar sorpresas y errores en nuestro código.

### Interfaces

Las **interfaces** en TypeScript son como contratos que describen la forma que deben tener los objetos. No generan código JavaScript en tiempo de ejecución; solo existen en tiempo de compilación para la verificación de tipos.

**Por qué revisar la compatibilidad:**

  * **Implementación flexible:** Una clase no necesita implementar una interfaz explícitamente con `implements` para ser compatible con ella. Si una clase (o cualquier objeto literal) tiene todas las propiedades requeridas por una interfaz con los tipos correctos, TypeScript la considerará compatible. Esto es una fortaleza, pero también una fuente potencial de errores si no se comprende bien.
    ```typescript
    interface Point {
        x: number;
        y: number;
    }

    class MyPoint {
        x: number;
        y: number;
        z: number; // Propiedad adicional
        constructor(x: number, y: number, z: number) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }

    let p: Point;
    p = new MyPoint(10, 20, 30); // Válido: MyPoint tiene x e y, lo cual es compatible con Point.
                                 // La propiedad 'z' extra no causa problema.

    interface Named {
        name: string;
    }

    let x: Named;
    let y = { name: 'Alice', location: 'New York' };
    x = y; // Válido: 'y' tiene la propiedad 'name'.
    ```
  * **Compatibilidad con tipos literales de objeto:** Puedes asignar un objeto literal a una interfaz si el objeto literal tiene todas las propiedades de la interfaz con los tipos correctos.
  * **Extensión de interfaces:** Cuando una interfaz extiende otra, la interfaz resultante debe ser compatible con la interfaz base, lo que implica que debe incluir todas sus propiedades.

### Enums

Los **enums** (enumeraciones) permiten definir un conjunto de constantes nombradas. En TypeScript, los enums tienen algunas particularidades en su compatibilidad.

**Por qué revisar la compatibilidad:**

  * **Numéricos y compatibles con `number`:** Por defecto, los enums son numéricos y sus miembros pueden ser tratados como números. Esto puede llevar a asignaciones inesperadas.
    ```typescript
    enum Color { Red, Green, Blue }
    enum Status { Active, Inactive }

    let c: Color = Color.Red;
    let n: number = c; // Válido: Un miembro de enum numérico es compatible con number.

    let s: Status = Status.Active;
    c = s; // ¡Error si 'strict' está activado! Pero sin 'strict',
           // pueden ser compatibles si sus valores subyacentes coinciden,
           // lo cual puede llevar a errores lógicos difíciles de depurar.
    ```
  * **Enums de cadena (string enums):** Los enums de cadena tienen una compatibilidad más estricta, lo que es generalmente más seguro. No son compatibles con `number`.
  * **Consideraciones de `strict`:** Con la opción `strict` del compilador activada (altamente recomendable), la compatibilidad entre enums de diferentes tipos es más rigurosa, lo que ayuda a prevenir errores.

### Clases

Las **clases** en TypeScript son una combinación de estructura de datos (propiedades) y comportamiento (métodos). Cuando se trata de compatibilidad de tipos entre clases, TypeScript también utiliza el subtipado estructural para sus *instancias*.

**Por qué revisar la compatibilidad:**

  * **Ignora miembros privados y protegidos:** Al comparar la compatibilidad de dos tipos de clase, TypeScript **solo considera los miembros públicos**. Si dos clases tienen la misma estructura de miembros públicos, se considerarán compatibles, incluso si sus miembros privados o protegidos son diferentes o provienen de jerarquías de herencia distintas.
    ```typescript
    class Animal {
        private name: string;
        constructor(name: string) { this.name = name; }
        move() { console.log('Moving...'); }
    }

    class Horse {
        private name: string;
        constructor(name: string) { this.name = name; }
        move() { console.log('Galloping...'); }
    }

    let a: Animal = new Animal('Buddy');
    let h: Horse = new Horse('Trigger');

    a = h; // Válido: 'h' tiene un método 'move()' público.
           // El 'private name' no afecta la compatibilidad de tipo estructural.
    h = a; // Válido: 'a' tiene un método 'move()' público.
    ```
  * **Métodos y propiedades:** La compatibilidad depende de que los métodos y propiedades públicos coincidan en nombre y tipo de manera recursiva.
  * **Herencia no es la única vía:** Una clase puede ser compatible con otra o con una interfaz sin necesidad de heredar explícitamente de ellas, siempre y cuando sus miembros públicos coincidan estructuralmente.

### Type Aliases (Tipos de Alias)

Los **type aliases** (`type`) permiten dar un nombre a cualquier tipo. Son especialmente útiles para crear tipos complejos combinando otros tipos (uniones, intersecciones, tuplas, etc.) y para definir objetos literales.

**Por qué revisar la compatibilidad:**

  * **Son solo alias:** A diferencia de las interfaces que pueden fusionarse (`declaration merging`), los `type aliases` simplemente crean un nombre nuevo para un tipo existente. No crean un "tipo nominal" distinto. Esto significa que la compatibilidad se basa puramente en la estructura del tipo subyacente.
    ```typescript
    type ID = number;
    type UserId = number;

    let id: ID = 123;
    let userId: UserId = 456;

    id = userId;   // Válido: Ambos son alias para 'number'.
    userId = id; // Válido.

    type Point2D = { x: number; y: number; };
    type Coords = { x: number; y: number; };

    let p2: Point2D = { x: 1, y: 2 };
    let c: Coords = { x: 3, y: 4 };

    p2 = c; // Válido: Ambas estructuras son idénticas.
    c = p2; // Válido.
    ```
  * **Uniones e intersecciones:** Al combinar tipos con uniones (`|`) o intersecciones (`&`), la compatibilidad puede volverse más compleja. Entender cómo estos operadores afectan la estructura final del tipo es crucial.
      * Una unión es compatible con cualquiera de sus miembros.
      * Una intersección requiere todas las propiedades de todos sus miembros.
  * **Tipos complejos:** Cuando defines tipos complejos usando type aliases (por ejemplo, tipos condicionales o recursivos), es fundamental entender la estructura resultante para predecir su compatibilidad con otros tipos.

### Conclusión

La naturaleza del **subtipado estructural** de TypeScript es una de sus mayores fortalezas, ya que promueve la flexibilidad y la reutilización del código. Sin embargo, para explotar esta ventaja sin caer en errores inesperados, es crucial entender cómo funciona la compatibilidad de tipos en interfaces, enums, clases y type aliases.

Revisar y comprender cómo TypeScript infiere y verifica la compatibilidad de tipos te permite escribir código más seguro, predecible y mantenible, minimizando los errores que de otro modo solo se manifestarían en tiempo de ejecución. Activar las opciones `strict` en tu `tsconfig.json` es el primer paso y el más importante para aprovechar al máximo esta poderosa característica.

