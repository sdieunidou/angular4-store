import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Book} from "../../core/model/book.model";
import {CatalogService} from "../../core/services/catalog.service";

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public books: Book[];


  constructor(private catalog: CatalogService) {}

  ngOnInit() {
    this.subscription = this.catalog.getList()
      .subscribe(books => this.books = books);
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

}
