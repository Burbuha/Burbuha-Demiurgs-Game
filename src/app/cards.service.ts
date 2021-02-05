import { Injectable } from "@angular/core";

export interface Cards {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Injectable()
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
  
  private ALIVE = this.cells[0];
  private DEAD = this.cells[1];
  private LIFE = this.cells[2];
  
  private CELL_DEAD_COUNT: number = 3;
  private CELL_ALIVE_COUNT: number = 2;

  private makePredicateFor = (arr, condition, count) => {
    return (
      arr.length >= count &&
      arr.slice(-count).every((item) => item.id === condition.id)
    );
  };
  private randomFn = () => Math.floor(Math.random() * 2);

  private hasAlive = (arr) =>
    this.makePredicateFor(arr, this.ALIVE, this.CELL_ALIVE_COUNT);

  private hasDead = (arr) =>
    this.makePredicateFor(arr, this.DEAD, this.CELL_DEAD_COUNT);

  public cards: Cards[] = [];

  constructor() {}

  updateCard(randomCell = this.randomFn()) {
    const newCell = this.cells[randomCell];
    const result = [...this.cards, newCell];

    if (this.hasDead(result)) {
      const lastLiveIndx = result.map((item) => item.id).lastIndexOf(this.LIFE.id);
      result.splice(lastLiveIndx, 1);
    }

    if (this.hasAlive(result)) {
      result.push(this.LIFE);
    }
    
    return result;
  }

  addCard(): void {
    this.cards = [...this.updateCard()];
  }
}
