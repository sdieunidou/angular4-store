import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Book} from "../model/book.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/publishLast"

const URL = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
const API_KEY = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

export interface BookPrevNext {
  book: Book;
  previousId: string;
  nextId: string;
}

@Injectable()
export class CatalogService {
  list$: Observable<Book[]>;

  constructor(
    private http: Http
  ) {
    this.load();

    setInterval(() => {
        this.load();
    }, 10000);
  }

  load() {
    this.list$ = this.http.get(URL + API_KEY)
      .map(response => response.json())
      .publishLast()
      .refCount();
  }

  getList(): Observable<Book[]> {
    return this.list$;
  }

  getBook(id: string): Observable<BookPrevNext>  {
    return this.getList()
      .map(
        books => {
          const book = books.filter(b => b._id.$oid === id)[0];
          const index = books.indexOf(book);
          const previousId = books[index - 1] && books[index - 1]._id.$oid;
          const nextId = books[index + 1] && books[index + 1]._id.$oid;

          return {
            book: book,
            previousId: previousId,
            nextId: nextId
          };
        }
      );
  }
}
