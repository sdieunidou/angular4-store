import {Book} from "./book.model";

export class CartRow {
  constructor (
    public book: Book,
    public quantity: number = 1
  )
  { }

  ht() {
    return this.book.price * this.quantity;
  }

  ttc() {
    return this.ht() * 1.055;
  }
}

