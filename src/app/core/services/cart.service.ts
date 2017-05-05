import { Injectable } from '@angular/core';
import {Book} from "../model/book.model";
import {CartRow} from "../model/cart-row.model";

@Injectable()
export class CartService {

  rows: CartRow[] = [];

  constructor(

  ) { }

  add(book: Book, quantity: number = 1) {
    const found = this.rows.filter(r => r.book._id.$oid === book._id.$oid)[0];
    if (found) {
      found.quantity += quantity;
    } else {
      this.rows.push(new CartRow(book, quantity));
    }
  }

  remove(row) {
    this.rows = this.rows.filter(r => r !== row);
  }

  getList() {
    return this.rows;
  }

  count() {
    return this.rows
      .map(row => row.quantity)
      .reduce((total, value) => total + value, 0);
  }

  total() {
    return this.rows
      .map(row => row.ht())
      .reduce((total, value) => total + value, 0);
  }

  isEmpty() {
    return this.rows.length === 0;
  }
}
