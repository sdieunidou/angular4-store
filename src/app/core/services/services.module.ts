import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogService} from "./catalog.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CatalogService
  ]
})
export class ServicesModule { }
