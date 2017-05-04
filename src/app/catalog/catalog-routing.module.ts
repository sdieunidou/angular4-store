import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {CatalogRootComponent} from "./catalog-root/catalog-root.component";

const routes = [
  {path: 'catalog', component: CatalogRootComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class CatalogRoutingModule { }
