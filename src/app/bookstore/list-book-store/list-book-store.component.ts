import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { Book } from "../../model/book.model";
import { BookService } from "../../service/book.service";

@Component({
  selector: "app-list-book-store",
  templateUrl: "./list-book-store.component.html",
  styleUrls: ["./list-book-store.component.css"]
})
export class ListBookStoreComponent implements OnInit {
  books: Book[] = [];
  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((response: any) => {
      this.books = response.books;
      console.log(this.books);
    });
  }

  deleteBookStore(book: Book): void {
    this.bookService.deleteBook(book.id).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(["add-book"]);
  }

  editBookStore(book: Book): void {
    window.localStorage.removeItem("editbookId");
    window.localStorage.setItem("editbookId", book.id.toString());
    this.router.navigate(["edit-book"]);
  }

  addBookStore(): void {
    this.router.navigate(["add-book"]);
  }
}
