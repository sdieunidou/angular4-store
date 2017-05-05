import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {
  data = {
    identity: {},
    shipping: {}
  };

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Finaliser ma commande');
  }

}
