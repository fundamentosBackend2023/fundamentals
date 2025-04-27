// ! Caso práctico: Lectura de información desde teclado

const read = require('node:readline');

const myRl = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

myRl.question('Whats your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    myRl.question('Whats your favorite color? ', (color) => {
        console.log(`${color} is a nice color`);
        myRl.question('Whats your favorite meal ', (meal) => {
            console.log(`${meal} is really popular`);
            const person = {
                name: name,
                favouriteColor: color,
                favouriteMeal: meal
            }
            console.log(person); // O guardar en DB
            // Cada acción subsecuente tendría que ir aquí
            myRl.close();
        });
    });
});