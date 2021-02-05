import { CardsService } from './cards.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Клеточное наполнение';
  constructor(public cardsService: CardsService) { }
}
