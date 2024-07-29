import { Book } from './book';

export class BookRepository {
  books: Map<number, Book>;

  constructor() {
    this.books = new Map<number, Book>();
  }

  findAll() {
    return Array.from(this.books.values());
  }

  findById(id: number) {
    return this.books.get(id);
  }

  save(book: Book) {
    if (book.id <= 0) {
      book.setId(this.generateId());
    }
    this.books.set(book.id, book);
  }

  delete(id: number) {
    this.books.delete(id);
  }

  findByTitle(title: string) {
    const books: Array<Book> = new Array();
    this.books.forEach((book) => {
      if (book.title.indexOf(title) > -1) {
        books.push(book);
      }
    });
    return books;
  }

  generateId() {
    return this.books.size + 1;
  }
}

export const bookMemoryRepository = new BookRepository();

function initTestData(count: number) {
  for (let index = 0; index < count; index++) {
    const id = index + 1;
    const title = 'book ' + id;
    const author = 'kenux';
    const price = 10000;
    const publishDate = new Date(2022, id, 13).toISOString().split('T')[0];
    const book = Book.createBook(title, author, price, publishDate);
    bookMemoryRepository.save(book);
  }
}
initTestData(10);

const displayTestData = () => {
  const books = bookMemoryRepository.findAll();
  console.log(books);
  books.forEach((book) => console.log(book));
};
displayTestData();

function testUpdateBook() {
  const book = getBook(1);
  book.title = 'newTitle';
  bookMemoryRepository.save(book);
}
testUpdateBook();

function testDeletBook() {
  const book = getBook(2);
  bookMemoryRepository.delete(book.id);
}
testDeletBook();

function testFindByTitle() {
  console.log('test find by title');
  const books = bookMemoryRepository.findByTitle('book');
  books.forEach((book) => console.log(book));
}
testFindByTitle();

function getBook(bookId: number) {
  const foundBook = bookMemoryRepository.findById(bookId);
  if (!foundBook) {
    throw new Error(`Not found book: ${bookId}`);
  }
  return foundBook;
}
