export class Book {
  id: number;
  title: string;
  author: string;
  price: number;
  publishDate: string;

  constructor(title: string, author: string, price: number, publishDate: string) {
    this.id = 0;
    this.title = title;
    this.author = author;
    this.price = price;
    this.publishDate = publishDate;
  }

  static createBook(title: string, author: string, price: number, publishDate: string) {
    return new Book(title, author, price, publishDate);
  }

  setId(id: number) {
    this.id = id;
  }

  updateData(book: Book) {
    this.title = book.title;
    this.author = book.author;
    this.price = book.price;
    this.publishDate = book.publishDate;
  }
}
