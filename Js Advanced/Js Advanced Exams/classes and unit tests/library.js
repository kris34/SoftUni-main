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
    let book = this.books.find((b) => b.bookName == bookName);

    if (!book) {
      throw new Error(`${bookName} is not in the collection.`);
    }

    if (book.payed) {
      throw new Error(`${bookName} has already been paid.`);
    } else {
      book.payed = true;
      return `${book.bookName} has been successfully paid.`;
    }
  }

  removeBook(bookName) {
    let book = this.books.find((b) => b.bookName == bookName);

    if (!book) {
      throw new Error(`The book, you're looking for, is not found.`);
    }

    if (!book.payed) {
      throw new Error(`${bookName} need to be paid before removing from the collection.`);
    }else{ 
      let index = this.books.indexOf(book);
      this.books.splice(index, 1);
      return `${bookName} remove from the collection.`;
    }

  }

  getStatistics(bookAuthor) {
    let emptySpots = this.capacity - this.books.length;

    if (!bookAuthor) {
      let result = [`The book collection has ${emptySpots} empty spots left.`];
      let sorted = this.books.sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );
      sorted.forEach((b) =>
        result.push(
          `${b.bookName} == ${b.bookAuthor} - ${
            b.payed ? 'Has Paid' : 'Not Paid'
          }.`
        )
      );
      return result.join('\n').trim();
    } else {
      let book = this.books.find((b) => b.bookAuthor == bookAuthor);
      if (book == undefined) {
        throw new Error(`${bookAuthor} is not in the collection.`)
      } else {
        return `${book.bookName} == ${book.bookAuthor} - ${
          book.payed ? 'Has Paid.' : 'Not Paid.'
        }`;
      }
    }
  }
}
const library = new LibraryCollection(5);
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
