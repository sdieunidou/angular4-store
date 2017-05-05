import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

const routes = [
  {path: 'cart', loadChildren: 'app/cart/cart.module#CartModule'},
  {path: '', redirectTo: 'catalog', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
