import { Bookshelf } from "../bookshelf/bookshelf.js"

class Library {
    constructor() {
        this.books = [];
        this.bookshelf = new Bookshelf(this);
    }

    clear = () => {
        this.books.clear();
        this.bookshelf.removeAllBooks();
    }

    addBook = (book) => {
        this.books.push(book);
    }
}

class Book {
    constructor(title, author, year, read) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.read = read;
    }
}

const library = new Library();
const book1 = new Book('The War and The Peace', 'L.N. Tolstoi', '1853', 'No');

library.addBook(book1);
library.bookshelf.addAllBooks(library.books);
