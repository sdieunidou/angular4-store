import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextRatingPipe } from './text-rating.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextRatingPipe],
  exports: [TextRatingPipe]
})
export class WidgetsModule { }
