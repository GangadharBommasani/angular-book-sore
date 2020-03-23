import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/index";

import { Response } from "../model/response.model";
import { Book } from "../model/book.model";

@Injectable({
  providedIn: "root"
})
export class BookService {
  baseUrl: string = "http://localhost:8081/bookstore/v1";
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + "/book-all", {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }

  getBookById(bookId: number): Observable<Response> {
    return this.http.get<Response>(this.baseUrl + "/book/" + bookId, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }

  deleteBook(bookId: number): Observable<Response> {
    return this.http.delete<Response>(this.baseUrl + "/delete/" + bookId, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }

  createBook(book: Book): Observable<Response> {
    return this.http.post<Response>(this.baseUrl + "/create", book, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }

  updateBook(book: Book): Observable<Response> {
    return this.http.put<Response>(this.baseUrl + "/update", book, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
  }
}
