export class BookCardField {
    constructor(name, value) {
        this.name = this.createSubControl('book-card-field__name', name);
        this.value = this.createSubControl('book-card-field__value', value);
        this.control = null;
        this.createControl();
    }

    createSubControl = (className, textContent) => {
        const control = document.createElement('div');
        control.classList.add(className);
        control.textContent = textContent;
        
        return control;
    }

    createControl = () => {
        this.control = document.createElement('div');
        this.control.classList.add('book-card-field');

        this.control.append(this.name, this.value);
    }

    updateControl = (name, value) => {
        this.name.textContent = name;
        this.value.textContent = value;
    }
}