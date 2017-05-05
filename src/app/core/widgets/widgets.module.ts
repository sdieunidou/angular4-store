import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextRatingPipe } from './text-rating.pipe';
import { HtmlRatingPipe } from './html-rating.pipe';
import { SmallCartComponent } from './small-cart/small-cart.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextRatingPipe,
    HtmlRatingPipe,
    SmallCartComponent,
    ErrorComponent
  ],
  exports: [
    TextRatingPipe,
    HtmlRatingPipe,
    SmallCartComponent,
    ErrorComponent
  ]
})
export class WidgetsModule { }
