import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BookService } from "../../service/book.service";
import { BookStore } from "../../model/bookStore.model";

@Component({
  selector: "app-add-book-store",
  templateUrl: "./add-book-store.component.html",
  styleUrls: ["./add-book-store.component.css"]
})
export class AddBookStoreComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bookService: BookService
  ) {}

  addForm: FormGroup;
  bookStore: BookStore;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      title: ["", Validators.required],
      category: ["", Validators.required],
      year: ["", Validators.required],
      price: ["", Validators.required],
      author: ["", Validators.required]
    });
  }

  onSubmit() {
    this.bookService.createBook(this.addForm.value).subscribe(data => {
      this.router.navigate(["list-book"]);
    });
  }
}
