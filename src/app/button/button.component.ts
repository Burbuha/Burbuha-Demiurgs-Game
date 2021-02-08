import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handelClick(): void{
    this.onClick;
  }

}
