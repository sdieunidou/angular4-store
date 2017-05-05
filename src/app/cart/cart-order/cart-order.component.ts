import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit {
  @ViewChild('form') form: NgForm;

  data = {
    identity: {},
    shipping: {},
    billing: {},
    sameAddress: true
  };

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Finaliser ma commande');
  }

  save(data) {
    console.log(data);
  }

}
