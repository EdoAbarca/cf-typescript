const hi = (name: string) => {
    console.log(`Hello, ${name}!`);
}

function goodbye(name: string): void {
    console.log(`Goodbye, ${name}!`);
}

function show(): void {
    console.log("This is a function without parameters or return value.");
}

const response = {
    status: 200,
    message: "OK",
    data: {
        id: 1,
        name: "Sample Data"
    }
}

function showResponse({status, data}: {status: number, data: {id: number, name: string}}): void {
    console.log(`Status: ${status}`);
    console.log(`Data ID: ${data.id}`);
    console.log(`Data Name: ${data.name}`);
}

// Example of destructuring with the ... operator (rest operator)
const { message, ...rest } = response;
console.log("Message:", message);
console.log("Rest:", rest);
