    //! Promesas

//* Estructura general

let books = {
    book1 : {
        title: 'El amor en los tiempos del cólera',
        author: 'Gabriel García Márquez'
    },
    book2: {
        title: 'Por quien doblan las campanas',
        author: 'Ernest Hemingway'
    },
    book3: {
        title: 'El extranjero',
        author: 'Albert Camus'
    }
}

// books = undefined

const retrieveBooks = () => { // Envuelve promesa
    return new Promise((resolve, reject) => { // Envuelve acción asíncrona
        setTimeout(() => {
            const myBooks = books;
            if(!myBooks){
                // Decora con mecanismos de manejo de acciones asíncronas
                reject(new Error('something went wrong :('))
            }
            // retorno asíncrono de información
            resolve(myBooks)
        }, 4000);
    })
}

retrieveBooks()
    .then(response => {
        console.log('This is the books catalog');
        console.log(response)
    })
    .catch((err) => console.log(err.stack))

console.log('This message will be printed first');

// * Promesa no envuelta en función

let books2 = {
    book1 : {
        title: 'El amor en los tiempos del cólera',
        author: 'Gabriel García Márquez'
    },
    book2: {
        title: 'Por quien doblan las campanas',
        author: 'Ernest Hemingway'
    },
    book3: {
        title: 'El extranjero',
        author: 'Albert Camus'
    }
}

new Promise((resolve, reject) => { // Envuelve acción asíncrona
    setTimeout(() => {
        const myBooks = books2;
        if(!myBooks){
            // Decora con mecanismos de manejo de acciones asíncronas
            reject(new Error('something went wrong :('))
        }
        // retorno asíncrono de información
        resolve(myBooks)
    }, 4000);
})
    .then(response => {
        console.log('This is the books catalog');
        console.log(response)
    })
    .catch((err) => console.log(err.stack));

console.log('This message will be printed first');

// * Then encadenados

let books3 = {
    book1 : {
        title: 'El amor en los tiempos del cólera',
        author: 'Gabriel García Márquez'
    },
    book2: {
        title: 'Por quien doblan las campanas',
        author: 'Ernest Hemingway'
    },
    book3: {
        title: 'El extranjero',
        author: 'Albert Camus'
    }
}

const retrieveBooksV3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const myBooks = books3;
            if(!myBooks){
                reject(new Error('something went wrong :('))
            }
            resolve(myBooks)
        }, 4000);
    })
}

retrieveBooksV3()
    .then(response => {
        console.log('Welcome to our Library!');
    })
    .then(() => console.log('This are the books on sale'))
    .then(() => console.log(response))
    .catch((err) => console.log(err.stack))

console.log('This message will be printed first');

//* Subsanando el scope del response
let books4 = {
    book1 : {
        title: 'El amor en los tiempos del cólera',
        author: 'Gabriel García Márquez'
    },
    book2: {
        title: 'Por quien doblan las campanas',
        author: 'Ernest Hemingway'
    },
    book3: {
        title: 'El extranjero',
        author: 'Albert Camus'
    }
}

const retrieveBooksV4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const myBooks = books4;
            if(!myBooks){
                reject(new Error('something went wrong :('))
            }
            resolve(myBooks)
        }, 4000);
    })
}

retrieveBooksV4()
    .then(response => {
        console.log('Welcome to our Library!');
        return response;
    })
    .then((returnedValue) => {
        console.log('This are the books on sale');
        return returnedValue;
    })
    .then((books) => console.log(books))
    .catch((err) => console.log(err.stack))

console.log('This message will be printed first');

//* Encadenando promesas - El verdadero control de sincronía
let books5 = {
    book1 : {
        title: 'El amor en los tiempos del cólera',
        author: 'Gabriel García Márquez'
    },
    book2: {
        title: 'Por quien doblan las campanas',
        author: 'Ernest Hemingway'
    },
    book3: {
        title: 'El extranjero',
        author: 'Albert Camus'
    }
}

const retrieveBooksV5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const myBooks = books5;
            if(!myBooks){
                reject(new Error('something went wrong :('))
            }
            resolve(myBooks)
        }, 4000);
    })
}

retrieveBooksV5()
    .then(response => {
        return new Promise((resolve, reject) => {
            console.log('Making security checks...')
            setTimeout(() => {
                resolve(response)
            }, 2000);
        })
    })
    .then(response => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Available authors:')
                for(book of Object.values(response)){
                    console.log('-',book.author)
                }
                resolve(response) // Return asíncrono, llamando al siguiente then
            }, 2000);
        })
    })
    .then((returnedValue) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('This are the books on sale');
                console.log('Please make sure to select the most interesting to you');
                console.log(returnedValue)
                //resolve()
            }, 3000);
        })
    })
    .then(() => console.log('We hope you liked them'))
    .catch((err) => console.log(err.stack))

console.log('This message will be printed first');