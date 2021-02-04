
import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public cardsService: CardsService) { }

  ngOnInit(): void {
  }

}
