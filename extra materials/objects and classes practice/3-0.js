//Create library management system. Use all knowledge of Classes and private/public methods and fields
class Library {
    books = [];
    #name;
    #address;
    constructor(name, address) {
        this.#name = name;
        this.#address = address;
    }
    getName() {
        return this.#name;
    }
    setName(name) {
        if (typeof name !== "string") {
            throw new Error("Invalid name type");
        }
        this.#name = name;
    }
    getAddress() {
        return this.#address;
    }
    setAddress(address) {
        if (typeof address !== "string") {
            throw new Error("Invalid address type");
        }
        this.#address = address;
    }
    addBook({title, author, genre}) {
        const newBookId = this.#getNewBookId();
        const newBook = new Book(newBookId, title, author, genre);
        this.books.push(newBook);
    }
    #getNewBookId() {
        return this.books.length ? Math.max(...this.books.map(obj => obj.getId())) + 1 : 1;
    }
    getBookByTitle(title) {
        return this.books.find(book => book.getTitle() === title);
    }
    getBooksByAuthor(author) {
        return this.books.filter(book => book.getAuthor() === author);
    }
    showAllBooks() {
        return this.books.map(obj => {
            return {
                title: obj.getTitle(),
                author: obj.getAuthor(),
                genre: obj.getGenre(),
            }
        })
    }
    removeBook(bookTitle) {
        const indexBook = this.books.findIndex(book => book.getTitle() === bookTitle);
        this.books.splice(indexBook, 1);
    }
}
class Book {
    #id;
    #title;
    #author;
    #genre;
    constructor(id, title, author, genre) {
        this.#id = id;
        this.#title = title;
        this.#author = author;
        this.#genre = genre;
    }
    getId() {
        return this.#id;
    }
    getTitle() {
        return this.#title;
    }
    getGenre() {
        return this.#genre;
    }
    getAuthor() {
        return this.#author;
    }
    setAuthor(author) {
        if (typeof author !== "string") {
            throw new Error("Invalid author type");
        }
        this.#author = author;
    }
}

const library = new Library();
library.addBook({title : "Jack Pirate", author : "Doyle", genre : "fantasy"})
library.addBook({title : "Harry Potter", author : "Rowling", genre : "fantasy"})
library.addBook({title : "Harry Potter2", author : "Rowling", genre : "fantasy"})
console.log(library.showAllBooks());
console.log(library.getBooksByAuthor("Rowling"));
console.log(library.getBookByTitle("Harry Potter"));
console.log(library.getBookByTitle("Not exist"));
library.removeBook("Jack Pirate");
console.log(library.showAllBooks());