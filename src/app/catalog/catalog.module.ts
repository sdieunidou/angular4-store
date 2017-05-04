import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRootComponent } from './catalog-root/catalog-root.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogBookComponent } from './catalog-book/catalog-book.component';
import {CatalogRoutingModule} from "./catalog-routing.module";

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [
    CatalogRootComponent,
    CatalogListComponent,
    CatalogBookComponent
  ],
  exports: [CatalogRootComponent]
})
export class CatalogModule { }
