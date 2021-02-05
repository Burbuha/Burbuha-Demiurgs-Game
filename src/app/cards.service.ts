import { Injectable } from "@angular/core";

export interface Cards {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Injectable({ providedIn: "root" })
export class CardsService {
  private cells = [
    {
      id: 1,
      icon: "../assets/alive.jpg",
      title: "Живая",
      description: "и шевелится!",
    },
    {
      id: 2,
      icon: "../assets/dead.jpg",
      title: "Мёртвая",
      description: "или прикидывается",
    },
    {
      id: 3,
      icon: "../assets/life.jpg",
      title: "Жизнь",
      description: "Ку-ку!",
    },
  ];

  constructor() {}

  public cards: Cards[] = [];

  addCard(): void {
    let i = Math.floor(Math.random() * 2);
    this.cards.push(this.cells[i]);

    let lengthArr = this.cards.length;

    if (
      lengthArr >= 3 &&
      this.cards[lengthArr - 1].id === 2 &&
      this.cards[lengthArr - 2].id === 2 &&
      this.cards[lengthArr - 3].id === 2
    ) {
      for (let j = lengthArr - 1; j >= 0; j--) {
        if (this.cards[j].id === 3) {
          this.cards.splice(j, 1);
          break;
        }
      }
    } else if (
      lengthArr >= 2 &&
      this.cards[lengthArr - 1].id === 1 &&
      this.cards[lengthArr - 2].id === 1
    ) {
      this.cards.push(this.cells[2]);
    }
  }
}
