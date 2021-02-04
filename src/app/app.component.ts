import { Component } from '@angular/core';

export interface Cards {
  id: number,
  icon: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Клеточное наполнение';

  public cards: Cards[] = [
  {id:1, icon: "../assets/alive.jpg", title: 'Живая', description: 'и шевелится!'},
  {id:2, icon: "../assets/dead.jpg", title: 'Мёртвая', description: 'или прикидывается'},
  {id:3, icon: "../assets/life.jpg", title: 'Жизнь', description: 'Ку-ку!'}
  ]
}
