import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Book} from "../../core/model/book.model";
import {CatalogService} from "../../core/services/catalog.service";
import {Title} from "@angular/platform-browser";
import {CartService} from "../../core/services/cart.service";
import {ActionService} from "../../core/services/action.service";

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public books: Book[];

  constructor(
    private catalog: CatalogService,
    private title: Title,
    private buyAction: ActionService
  ) {}

  ngOnInit() {
    this.subscription = this.catalog.getList()
      .subscribe(books => this.books = books);

    this.title.setTitle('Catalogue');
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  addToCard(book: Book) {
    this.buyAction.addToCard(book);
  }
}
