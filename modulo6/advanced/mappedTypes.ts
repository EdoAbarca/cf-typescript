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
//TODO: Hacer ejemplo CRUD con mappedTypes y generics
*/