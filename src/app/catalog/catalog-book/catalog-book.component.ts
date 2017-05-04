import {Component, OnDestroy, OnInit} from '@angular/core';
import {CatalogService} from "../../core/services/catalog.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {Book} from "../../core/model/book.model";

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css']
})
export class CatalogBookComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public book: Observable<Book>;

  constructor(
    private catalog: CatalogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => this.book = this.catalog.getBook(params['id'])
    );
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

}
