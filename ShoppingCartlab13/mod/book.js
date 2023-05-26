let book = [];
let counter = 0;

module.exports = class Book {
  constructor(id, title, ISBN, publishedDate, Author) {
    this.id = id;
    this.title = title;
    this.ISBN = ISBN;
    this.publishedDate = publishedDate;
    this.Author = Author;
  }

  addAllBook() {
    this.id = counter++;
    book.push(this);
    return this;
  }

  replace() {
    const index = book.findIndex((c) => c.id === this.id);
    book.splice(index, 1, this);
    return this;
  }

  static getAllBook() {
    return book;
  }

  static deleteBook(bookId) {
    const index = book.findIndex((c) => c.id === bookId);
    if(!index) return "not present";
    const del =book[index];
    book.splice(index,1);
    return del;
}
}