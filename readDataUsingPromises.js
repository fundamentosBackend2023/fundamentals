// ! Caso práctico: Lectura de información desde teclado
const read = require('node:readline');

const myRl = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

//? Envoltura con promesas para simplificar callbacks asíncronos
const askQuestion = (message) => {
    return new Promise((resolve, reject) => {
        myRl.question(message, (answer) => {
            answer ? resolve(answer) : reject('There was some issue');
        });
    });
}

const person= {};

askQuestion('Whats your name? ')
    .then(response => {
        console.log(`Hello, ${response}!`);
        person.name = response;
        // Retorna una promesa y por ello el sig then solo se activará con su resolve
        return askQuestion('Whats your favorite color? ')
    })
    .then(response => {
        console.log(`${response} is a nice color`);
        person.favouriteColor = response;
        return askQuestion('Whats your favorite meal ')
    })
    .then(response => {
        console.log(`${response} is really popular`);
        person.favouriteMeal = response;
        console.log(person)
        myRl.close();
    })