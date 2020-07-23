'use strict'

let myBook = [
    {
        title: 'The handmaid\'s tale', 
        author: 'M. Atwood', 
        alreadyRead: true
    }, 
    {
        title: 'A Brief History of Time From the Big Bang to Black Holes', 
        author: 'S.W. Hawking', 
        alreadyRead: false
    }, 
    {
        title: 'HTML5 for masterminds', 
        author: 'J.D. Gauchat', 
        alreadyRead: true
    }
];
    // loop  through the array of books
for (let i = 0; i < myBook.length; i++ ) {
    console.log(`"${myBook[i].title} by ${myBook[i].author}"`);
    // log depending on whether I read it yet or not
    if(myBook[i].alreadyRead === true){
        console.log(`I already read "${myBook[i].title}"`);
    } else {
        onsole.log(`I still need to read "${myBook[i].title}"`)
    }
}

