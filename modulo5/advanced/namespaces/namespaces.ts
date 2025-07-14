namespace DBEntity {
    export class User {
        constructor(public name: string) {}
    }
    
    const myUser = new User("John Doe");
    console.log(myUser.name); // Output: John Doe
}