# Modulo 8

TypeScript, al ser un superconjunto de JavaScript que añade tipado estático, se integra de manera muy beneficiosa con los frameworks modernos. Su objetivo principal es mejorar la robustez del código, facilitar el mantenimiento y detectar errores en tiempo de desarrollo, antes de que el código se ejecute. Aquí te explico cómo se une con React, Angular, Express y NestJS:

## Beneficios generales de TypeScript con frameworks:

  * **Tipado estático:** Permite definir los tipos de datos para variables, funciones, props, estados, etc. Esto ayuda a prevenir errores de tipo en tiempo de compilación.
  * **Detección temprana de errores:** Los errores se detectan durante la fase de desarrollo o compilación, en lugar de en tiempo de ejecución, lo que ahorra tiempo de depuración.
  * **Mayor legibilidad y mantenibilidad:** El código con tipos explícitos es más fácil de entender para otros desarrolladores y para uno mismo en el futuro.
  * **Mejor soporte de IDE:** Los entornos de desarrollo integrados (IDE) como VS Code pueden proporcionar autocompletado inteligente, refactorización segura y navegación de código mejorada gracias a la información de tipo.
  * **Escalabilidad:** En proyectos grandes, el tipado estático ayuda a gestionar la complejidad y mantener la calidad del código.

## Cómo se une TypeScript con cada framework:

### 1\. React

React es una biblioteca de JavaScript para construir interfaces de usuario. La integración con TypeScript se logra principalmente a través de:

  * **Extensiones de archivo `.tsx`:** Los archivos que contienen JSX (la sintaxis similar a HTML de React) deben usar la extensión `.tsx` para que TypeScript los procese correctamente.
  * **Definiciones de tipos para props y estado:**
      * Puedes usar `interface` o `type` para definir la forma de las props que un componente espera recibir, y el estado interno del componente.
    <!-- end list -->
    ```typescript
    interface MyComponentProps {
      name: string;
      age: number;
      isActive?: boolean; // Prop opcional
    }

    const MyComponent: React.FC<MyComponentProps> = ({ name, age, isActive }) => {
      const [count, setCount] = React.useState<number>(0); // Estado tipado
      return (
        <div>
          <h1>Hello, {name}!</h1>
          <p>You are {age} years old.</p>
          {isActive && <p>Active User</p>}
          <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
      );
    };
    ```
  * **Paquetes `@types/react` y `@types/react-dom`:** Estos paquetes, disponibles a través de `npm`, proporcionan las definiciones de tipo para la biblioteca React y ReactDOM, permitiendo a TypeScript entender las funciones y componentes de React.
  * **Tipado de eventos:** Los eventos del DOM en React también pueden ser tipados para asegurar que manejas los tipos de eventos correctos (ej. `React.MouseEvent<HTMLButtonElement>`, `React.ChangeEvent<HTMLInputElement>`).
  * **Context API, Redux, etc.:** También puedes tipar el contexto de React, las acciones y el estado en librerías de gestión de estado como Redux, garantizando la consistencia de los datos en toda la aplicación.
  * **Creación de proyectos:** Herramientas como Create React App o Next.js permiten inicializar proyectos directamente con soporte para TypeScript (`npx create-react-app my-app --template typescript`).

### 2\. Angular

Angular fue construido desde cero con TypeScript como su lenguaje principal, lo que significa que la integración es fundamental y sin fisuras.

  * **TypeScript como lenguaje predeterminado:** Todas las aplicaciones Angular se escriben en TypeScript por defecto. Esto significa que no hay una "integración" separada; es simplemente la forma en que funciona Angular.
  * **Decoradores:** Angular utiliza decoradores (como `@Component`, `@Injectable`, `@NgModule`) que son características de TypeScript para añadir metadatos a clases y propiedades.
  * **Tipado de componentes, servicios, módulos:** Todos los elementos de Angular, desde los componentes con sus propiedades y métodos, hasta los servicios y los módulos, están fuertemente tipados.
    ```typescript
    import { Component, OnInit } from '@angular/core';

    interface User {
      id: number;
      name: string;
      email: string;
    }

    @Component({
      selector: 'app-user-list',
      templateUrl: './user-list.component.html',
      styleUrls: ['./user-list.component.css']
    })
    export class UserListComponent implements OnInit {
      users: User[] = [];

      constructor() { }

      ngOnInit(): void {
        this.fetchUsers();
      }

      fetchUsers(): void {
        // Simulación de una llamada API
        this.users = [
          { id: 1, name: 'Alice', email: 'alice@example.com' },
          { id: 2, name: 'Bob', email: 'bob@example.com' }
        ];
      }
    }
    ```
  * **Archivos de configuración `tsconfig.json`:** Angular ya viene con un archivo `tsconfig.json` preconfigurado que define cómo TypeScript debe compilar el proyecto.
  * **Angular CLI:** La interfaz de línea de comandos de Angular (CLI) facilita la creación de nuevos proyectos, componentes, servicios y otras estructuras, todos ellos generados con código TypeScript listo para usar.

### 3\. Express (con Node.js)

Express es un framework web minimalista y flexible para Node.js. Al ser principalmente un framework de JavaScript, la integración de TypeScript requiere algunos pasos adicionales:

  * **Instalación de TypeScript y tipos de Express:** Necesitas instalar TypeScript como dependencia de desarrollo y las definiciones de tipo para Express y Node.js:
    ```bash
    npm install -D typescript @types/node @types/express
    ```
  * **Archivo `tsconfig.json`:** Se debe crear y configurar un archivo `tsconfig.json` en la raíz del proyecto para decirle a TypeScript cómo compilar el código. Configuraciones comunes incluyen `target`, `module`, `outDir`, `rootDir`, y `esModuleInterop`.
  * **Escritura del código del servidor en TypeScript:** Los archivos de tu servidor Express se escribirán con la extensión `.ts`.
    ```typescript
    import express, { Request, Response, NextFunction } from 'express';

    const app = express();
    const port = 3000;

    interface User {
      id: number;
      name: string;
    }

    app.use(express.json()); // Para parsear el body de las peticiones

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello, Express with TypeScript!');
    });

    app.post('/users', (req: Request<{}, {}, User>, res: Response<User>) => {
      const newUser: User = req.body;
      // Lógica para guardar el usuario
      res.status(201).json(newUser);
    });

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
    ```
  * **Tipado de `Request`, `Response`, `NextFunction`:** Las definiciones de `@types/express` permiten tipar los objetos `req`, `res` y `next` en tus rutas y middleware, haciendo que las propiedades y métodos sean autocompletables y verificados por tipo.
  * **Transpilación y ejecución:** Antes de ejecutar la aplicación, el código TypeScript debe ser transpilado a JavaScript (usando `tsc`). Herramientas como `ts-node` o `nodemon` con `ts-node` facilitan el desarrollo, ya que transpilan y ejecutan el código sobre la marcha.

### 4\. NestJS

NestJS es un framework progresivo de Node.js para construir aplicaciones del lado del servidor escalables. Al igual que Angular, NestJS está construido completamente con y para TypeScript.

  * **TypeScript como lenguaje nativo:** NestJS adopta TypeScript como su lenguaje principal y aprovecha sus características de forma extensiva (decoradores, interfaces, clases).
  * **Arquitectura modular y basada en decoradores:** NestJS utiliza decoradores para definir controladores (`@Controller`), módulos (`@Module`), proveedores (`@Injectable`), etc., lo que permite una arquitectura bien organizada y tipada.
    ```typescript
    import { Controller, Get, Post, Body } from '@nestjs/common';
    import { AppService } from './app.service';

    interface CreateUserDto {
      name: string;
      email: string;
    }

    @Controller('users')
    export class UsersController {
      constructor(private readonly appService: AppService) {}

      @Get()
      getUsers(): string[] {
        return this.appService.getAllUsers();
      }

      @Post()
      createUser(@Body() createUserDto: CreateUserDto): string {
        return this.appService.addUser(createUserDto.name);
      }
    }
    ```
  * **Inyección de dependencias fuertemente tipada:** El sistema de inyección de dependencias de NestJS se beneficia enormemente del tipado de TypeScript, asegurando que las dependencias se inyecten correctamente y que los tipos sean coherentes.
  * **CLI de NestJS:** La CLI de NestJS (`@nestjs/cli`) permite generar rápidamente esqueletos de proyectos, módulos, controladores y servicios, todos preconfigurados con TypeScript.
  * **Integración con ORMs/ODMs:** NestJS tiene una excelente integración con TypeORM (para bases de datos SQL y NoSQL) y Mongoose (para MongoDB), que son librerías que también aprovechan fuertemente TypeScript para definir entidades y esquemas.

En resumen, TypeScript se ha convertido en una herramienta invaluable en el desarrollo web moderno, y su integración con frameworks como React, Angular, Express y NestJS no solo es posible, sino que es altamente recomendada para construir aplicaciones más robustas, escalables y fáciles de mantener.