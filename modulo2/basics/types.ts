let age: number = 20;           // Number
let userName: string = "Eduardo";   // String
let isStudent: boolean = true;  // Boolean
let scores: number[] = [90, 85, 88]; // Array of numbers
let hobbies: string[] = ["music", "sports"]; // Array of strings

let fruits: Object[] = [
  { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },{}];

let response: any = "Hola";
response = 42; 
response = true; 
response = { message: "Hello" }; // 'any' type allows any value

function greet(): void {
  console.log("Hello, TypeScript!");
}  

let response2: unknown;
response2 = true;

if (response2){
    console.log("Response is truthy");
}

let response3: null;
let response4: undefined;
//let response5: never;

let response5: number | null;
response5 = 20;
response5?.toString();

type ResponseTypeService = number | undefined;

let responseProduct: ResponseTypeService;
let responsePartner: ResponseTypeService;