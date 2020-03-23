import { RouterModule, Routes } from "@angular/router";

import { ListBookStoreComponent } from "./bookstore/list-book-store/list-book-store.component";
import { AddBookStoreComponent } from "./bookstore/add-book-store/add-book-store.component";
import { EditBookStoreComponent } from "./bookstore/edit-book-store/edit-book-store.component";

const routes: Routes = [
  { path: "add-book", component: AddBookStoreComponent },
  { path: "edit-book", component: EditBookStoreComponent },
  { path: "list-book", component: ListBookStoreComponent }
];

export const routing = RouterModule.forRoot(routes);
