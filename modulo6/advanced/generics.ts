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