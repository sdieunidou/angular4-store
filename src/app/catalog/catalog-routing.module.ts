import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {CatalogRootComponent} from "./catalog-root/catalog-root.component";
import {CatalogListComponent} from "./catalog-list/catalog-list.component";
import {CatalogBookComponent} from "./catalog-book/catalog-book.component";

const routes = [
  {
    path: 'catalog',
    component: CatalogRootComponent,
    children: [
      {path: 'list', component: CatalogListComponent },
      {path: 'book/:id', component: CatalogBookComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class CatalogRoutingModule { }
