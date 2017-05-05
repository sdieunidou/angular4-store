import { Injectable } from '@angular/core';
import {Book} from "../model/book.model";
import {CartRow} from "../model/cart-row.model";

@Injectable()
export class CartService {

  rows: CartRow[] = [];

  constructor(

  ) { }

  add(book: Book, quantity: number = 1) {
    this.rows.push(new CartRow(book));
  }

  getList() {
    return this.rows;
  }
}
