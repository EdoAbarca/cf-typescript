interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

// Usando Pick para crear un tipo con solo 'id' y 'name'
type ProductSummary = Pick<Product, 'id' | 'name'>;
/*
// ProductSummary será equivalente a:
type ProductSummary = {
    id: number;
    name: string;
};
*/

// Usando Omit para crear un tipo sin 'description'
type ProductWithoutDescription = Omit<Product, 'description'>;
/*
// ProductWithoutDescription será equivalente a:
type ProductWithoutDescription = {
    id: number;
    name: string;
    price: number;
};
*/

// Usando Record para un diccionario de usuarios
type UserStatus = 'active' | 'inactive' | 'pending';
type UserDictionary = Record<string, UserStatus>; // Claves string, valores UserStatus
/*
// UserDictionary podría ser algo como:
const users: UserDictionary = {
    "john.doe": "active",
    "jane.smith": "pending",
};
*/

// Usando NonNullable
type MaybeString = string | null | undefined;
type SureString = NonNullable<MaybeString>; // sureString será de tipo string