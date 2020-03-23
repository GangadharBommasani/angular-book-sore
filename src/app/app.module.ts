import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ListBookStoreComponent } from "./bookstore/list-book-store/list-book-store.component";

import { BookService } from "./service/book.service";

import { routing } from "./app.routing";
import { AddBookStoreComponent } from "./bookstore/add-book-store/add-book-store.component";
import { EditBookStoreComponent } from "./bookstore/edit-book-store/edit-book-store.component";

@NgModule({
  declarations: [
    AppComponent,
    ListBookStoreComponent,
    AddBookStoreComponent,
    EditBookStoreComponent
  ],
  imports: [BrowserModule, routing, ReactiveFormsModule, HttpClientModule],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
