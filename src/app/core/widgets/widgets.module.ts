import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextRatingPipe } from './text-rating.pipe';
import { HtmlRatingPipe } from './html-rating.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextRatingPipe, HtmlRatingPipe],
  exports: [TextRatingPipe, HtmlRatingPipe]
})
export class WidgetsModule { }
