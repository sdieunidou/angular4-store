import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextRatingPipe } from './text-rating.pipe';
import { HtmlRatingPipe } from './html-rating.pipe';
import { SmallCartComponent } from './small-cart/small-cart.component';
import { ErrorComponent } from './error/error.component';
import { ControlComponent } from './control/control.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextRatingPipe,
    HtmlRatingPipe,
    SmallCartComponent,
    ErrorComponent,
    ControlComponent
  ],
  exports: [
    TextRatingPipe,
    HtmlRatingPipe,
    SmallCartComponent,
    ErrorComponent,
    ControlComponent
  ]
})
export class WidgetsModule { }
