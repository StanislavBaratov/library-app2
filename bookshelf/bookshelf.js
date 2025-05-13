import { BookCard } from "../book-card/book-card.js";

export class Bookshelf {
    constructor(library) {
        this.control = document.querySelector('.bookshelf');
    }

    removeAllBooks = () => {
        Object.keys(this.control.children).forEach((book) => {
            this.control.children[book].remove();
        });
    }

    addAllBooks = (books) => {
        books.forEach((book) => {
            const bookCard = new BookCard(book);
            this.control.appendChild(bookCard.control);
        });
    }
}