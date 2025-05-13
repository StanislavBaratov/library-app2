import { BookCardField } from "../book-card-field/book-card-field.js";

export class BookCard {
    constructor(book) {
        this.book = book;
        this.control = null;
        this.fields = {};
        this.createControl();
    }

    createFields = () => {
        Object.keys(this.book).forEach((key) => {
            const field = new BookCardField(key, this.book[key]);
            this.fields[key] = field;
            this.control.appendChild(field.control);
        });
    }

    createControl = () => {
        this.control = document.createElement('div');
        this.control.classList.add('book-card');
        this.createFields();
    }

    updateControl() {
        Object.keys(this.book).forEach((key) => {
            this.fields[key].updateControl(key, this.book[key]);
        });
    }
}