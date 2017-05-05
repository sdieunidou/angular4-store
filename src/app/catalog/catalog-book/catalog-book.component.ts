import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookPrevNext, CatalogService} from "../../core/services/catalog.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Book} from "../../core/model/book.model";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {Title} from "@angular/platform-browser";
import {ActionService} from "../../core/services/action.service";

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css']
})
export class CatalogBookComponent implements OnInit {
  public book$: Observable<BookPrevNext>;

  constructor(
    private catalog: CatalogService,
    private route: ActivatedRoute,
    private title: Title,
    private buyAction: ActionService
  ) { }

  ngOnInit() {
    this.book$ = this.route.params
      .switchMap(
        params => this.catalog.getBook(params['id'])
      )
      .do(book => this.title.setTitle(book.book.title));

    /*
      this.subscription = this.route.params
       .switchMap(
          params => this.catalog.getBook(params['id'])
       )
       .subscribe(book => this.book = book);
     */
  }

  addToCard(book: Book) {
    this.buyAction.addToCard(book);
  }
}
