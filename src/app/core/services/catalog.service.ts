import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Book} from "../model/book.model";

const URL = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
const API_KEY = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {
  constructor(
    private http: Http
  ) { }

  getList(): Observable<Book[]> {
    return this.http.get(URL + API_KEY)
      .map(response => response.json());
  }

  getBook(id: string): Observable<Book>  {
    return this.http.get(URL + id + API_KEY)
      .map(response => response.json());
  }
}
