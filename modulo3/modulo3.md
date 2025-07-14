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