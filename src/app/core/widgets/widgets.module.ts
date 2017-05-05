import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextRatingPipe } from './text-rating.pipe';
import { HtmlRatingPipe } from './html-rating.pipe';
import { SmallCartComponent } from './small-cart/small-cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextRatingPipe,
    HtmlRatingPipe,
    SmallCartComponent
  ],
  exports: [
    TextRatingPipe,
    HtmlRatingPipe,
    SmallCartComponent
  ]
})
export class WidgetsModule { }
