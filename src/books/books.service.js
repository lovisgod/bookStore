import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';

@Injectable()
export class BooksService {
   constructor(){
    this.books = BOOKS;
   }

    getBooks(){
        return new Promise(resolve => {
            resolve(this.books);
        });
    }
    getBook(bookID) {
        let id = Number(bookID);
        return new Promise(resolve => {
            const book = this.books.find(book => book.id === id);
            if (!book) {
                throw new HttpException('Book does not exist!', 404);
            }
            resolve(book);
        });
    }

    addBook(book){
        return new Promise(resolve => {
            this.books.push(book);
            resolve(this.books);
        });
    }

    deleteBook(bookID) {
        let id = Number(bookID);
        return new Promise(resolve => {
            let index = this.books.findIndex(book => book.id === id);
            if (index === -1) {
                throw new HttpException('Book does not exist!', 404);
            }
            this.books.splice(1, index);
            resolve(this.books);
        });
    }
}
