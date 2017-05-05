import { Component, OnInit } from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {ReduceUtil} from "../../core/services/reduce.utils";

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartContentComponent implements OnInit {

  constructor(
    private cart: CartService
  ) { }

  ngOnInit() {
  }

  getList() {
    return this.cart.getList();
  }

  totalHt() {
    return this.getList()
      .filter(row => row.ht() >= 0)
      .map(row => row.ht())
      .reduce(ReduceUtil.total, 0);
  }

  totalTtc() {
    return this.getList()
      .filter(row => row.ttc() >= 0)
      .map(row => row.ttc())
      .reduce(ReduceUtil.total, 0);
  }

  isBig(amount) {
    return amount >= 100;
  }
}
