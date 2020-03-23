import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";
import { BookService } from "../../service/book.service";
import { Book } from "src/app/model/book.model";

@Component({
  selector: "app-edit-book-store",
  templateUrl: "./edit-book-store.component.html",
  styleUrls: ["./edit-book-store.component.css"]
})
export class EditBookStoreComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bookService: BookService
  ) {}

  editForm: FormGroup;
  books: Book[] = [];
  ngOnInit(): void {
    let bookId = window.localStorage.getItem("editbookId");
    if (!bookId) {
      alert("Invalid action.");
      this.router.navigate(["list-book"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [""],
      title: ["", Validators.required],
      category: ["", Validators.required],
      year: ["", Validators.required],
      price: ["", Validators.required],
      author: ["", Validators.required]
    });
    this.bookService.getBookById(+bookId).subscribe((response: any) => {
      this.books = response.books;
      this.editForm.controls.id.setValue(this.books[0]["id"]);
      this.editForm.controls.title.setValue(this.books[0]["title"]);
      this.editForm.controls.category.setValue(this.books[0]["category"]);
      this.editForm.controls.year.setValue(this.books[0]["year"]);
      this.editForm.controls.price.setValue(this.books[0]["price"]);
      this.editForm.controls.author.setValue(this.books[0]["authors"][0]);
    });
  }

  onSubmit() {
    this.bookService
      .updateBook(this.editForm.value)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
      });
    this.router.navigate(["list-book"]);
  }
}
