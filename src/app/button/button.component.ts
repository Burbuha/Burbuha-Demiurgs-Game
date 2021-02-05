import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter();

  constructor(public cardsService: CardsService) { }

  ngOnInit(): void {
  }

  handelClick(): void{
    this.onClick;
  }

}
