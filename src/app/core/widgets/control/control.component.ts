import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
