import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartRootComponent} from "./cart-root/cart-root.component";
import {CartContentComponent} from "./cart-content/cart-content.component";
import {CartOrderComponent} from "./cart-order/cart-order.component";

const routes = [
  {
    path: '',
    component: CartRootComponent,
    children: [
      {path: 'content', component: CartContentComponent },
      {path: 'order', component: CartOrderComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
