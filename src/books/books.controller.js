import { Controller, Get, Param, Post, Body, Query, Delete, Dependencies, Bind, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
// import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
@Dependencies(BooksService)
export class BooksController {
    constructor(booksService){
        this.booksService = booksService;
    }


    @UseGuards(JwtAuthGuard)
    @Get()
    async getBooks() {
        const books = await this.booksService.getBooks();
        return books;
    }

    @Get(':bookID')
    @Bind(Param('bookID'))
    async getBook(bookID) {
        const book = await this.booksService.getBook(bookID);
        return book;
    }

    @Post()
    @Bind(Body())
    async addBook(createBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return book;
    }

    @Delete()
    @Bind(Query())
    async deleteBook(query) {
        const books = await this.booksService.deleteBook(query.bookID);
        return books;
    }
}
