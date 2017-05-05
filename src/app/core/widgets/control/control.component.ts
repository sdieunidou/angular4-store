import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Input() label: string;
  @ContentChild(NgModel) control: NgModel;
  @ContentChild(NgForm) form: NgForm;

  constructor() { }

  ngOnInit() {
  }

}
