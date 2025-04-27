    //! Muestra de acciones asíncronas
let seconds = 5
setTimeout(() => {
    console.log("Hello", seconds, "seconds later");
}, seconds * 1000);

console.log('This code will be printed before');
console.log('This code too')

// Simulating database fetching
const books = {
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

let myBooks;

const fetchBooks = () => {
    console.log('Statring books fetching');
    setTimeout(() => { //askBooksFromDatabase()
        myBooks = books;
        console.log('fetched...')
        if(!myBooks){
            console.log('something went wrong :(');
        }
    }, 2000);
    console.log(myBooks);
}

fetchBooks();

    //! Callbacks Asíncronos

const booksv2 = {
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

const fetchBooksV2 = (actionToTake) => {
    console.log('Statring books fetching');
    setTimeout(() => {
        myBooks = booksv2;
        if(!myBooks){
            console.log('something went wrong :(');
        }
        actionToTake(myBooks)
    }, 2000);
}

fetchBooksV2((booksv2) => {
    console.log('Showing books collection');
    console.log(booksv2);
});


//* Acciones anidadas - Callbacks anidados


const booksv3 = {
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

const fetchBooksV3 = (actionToTake, secondActionToTake) => {
    console.log('Statring books fetching');
    setTimeout(() => {
        myBooks = booksv3;
        if(!myBooks){
            console.log('something went wrong :(');
        }
        actionToTake(myBooks, secondActionToTake)
    }, 2000);
}

fetchBooksV3((books, secondActionToTake) => {
    console.log('Showing books collection');
    console.log(books);
    secondActionToTake()
    },
    function(){
        setTimeout(() => {
            console.log('We hope you like our books selection. Enjoy!');
        }, 3000);
});

//* ¿Return asíncrono?

const booksv4 = {
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

const retrieveBooks = () => {
    setTimeout(() => {
        const retrievedBooks = booksv4;
        if(!retrieveBooks) console.log('Data not retrieve')
        return retrievedBooks;
    }, 1500);
}

const library = retrieveBooks();
console.log(library);