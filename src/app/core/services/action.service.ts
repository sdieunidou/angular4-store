import { Injectable } from '@angular/core';
import {CartService} from "./cart.service";
import {Router} from "@angular/router";
import {Book} from "../model/book.model";

@Injectable()
export class ActionService {

  constructor(
    private cart: CartService,
    private router: Router
  ) { }

  addToCard(book: Book) {
    this.cart.add(book);
    this.router.navigate(['/cart/content']);
  }

  orderCart() {
    this.router.navigate(['/cart/order']);
  }

}
