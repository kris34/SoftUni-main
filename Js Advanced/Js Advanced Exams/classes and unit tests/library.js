class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length >= this.capacity) {
      throw new Error('Not enough space in the collection.');
    }

    this.books.push({ bookName, bookAuthor, payed: false });
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    let isFound = this.books.some((b) => b.bookName == bookName);
  
    if (isFound == false) {
      throw new Error(`${bookName} is not in the collection.`);
    }

    let isPayed = this.books.some((b) => b.payed == true);

    if (isPayed == true) {
      throw new Error(`${bookName} has already been paid.`);
    } else {
      let book = this.books.find((b) => b.bookName == bookName);
      book.payed = true;
      return `${bookName} has been successfully paid.`;
    }
  }
}
const library = new LibraryCollection(2);
library.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library.payBook('In Search of Lost Time'));
console.log(library.payBook('Don Quixote'));
