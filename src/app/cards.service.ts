import { ALIVE, DEAD, LIFE, cells } from "./conditions";
import { randomFn, makePredicateFor } from "./service.helpers";
import { Injectable } from "@angular/core";

export interface Cards {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Injectable()
export class CardsService {
  private CELL_DEAD_COUNT: number = 3;
  private CELL_ALIVE_COUNT: number = 2;

  private hasAlive = (arr) =>
    makePredicateFor(arr, ALIVE, this.CELL_ALIVE_COUNT);

  private hasDead = (arr) => makePredicateFor(arr, DEAD, this.CELL_DEAD_COUNT);

  public cards: Cards[] = [];

  constructor() {}

  updateCard(randomCell = randomFn()) {
    const newCell = cells[randomCell];
    const result = [...this.cards, newCell];

    if (this.hasDead(result)) {
      const lastLiveIndx = result.map((item) => item.id).lastIndexOf(LIFE.id);
      lastLiveIndx > -1 && result.splice(lastLiveIndx, 1);
    }

    if (this.hasAlive(result)) {
      result.push(LIFE);
    }

    return result;
  }

  addCard(): void {
    this.cards = [...this.updateCard()];
  }
}
