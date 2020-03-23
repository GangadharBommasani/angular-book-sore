export interface BookStore {
  books: Array<Books>;
}

export interface Books {
  title: string;
  category: string;
  year: number;
  price: number;
  authors: Array<Author>;
}

export interface Author {
  author: string;
}
