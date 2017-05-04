import {Component, OnDestroy, OnInit} from '@angular/core';
import {CatalogService} from "../../core/services/catalog.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Book} from "../../core/model/book.model";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css']
})
export class CatalogBookComponent implements OnInit {
  public book$: Observable<Book>;

  constructor(
    private catalog: CatalogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.book$ = this.route.params.switchMap(
      params => this.catalog.getBook(params['id'])
    );

    /*
      this.subscription = this.route.params
       .switchMap(
          params => this.catalog.getBook(params['id'])
       )
       .subscribe(book => this.book = book);
     */
  }
}
