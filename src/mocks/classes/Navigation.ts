import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { Card } from "./Card";

export interface Navigation extends BaseClassData {
  cards: {
    nav: "push" | "update" | "pop" | "popToRoot";
    card: Card | null;
  }[];
}

export class Navigation extends BaseClass<Navigation> {
  constructor() {
    super();
    this._data.cards = [];
  }

  private pushCard(card: Card) {
    this._data.cards.push({ nav: "push", card: card.getData() });
    return this;
  }

  private updateCard(card: Card) {
    this._data.cards.push({ nav: "update", card: card.getData() });
    return this;
  }

  private popCard() {
    this._data.cards.push({ nav: "pop", card: null });
    return this;
  }

  private popToRoot() {
    this._data.cards.push({ nav: "popToRoot", card: null });
    return this;
  }
}
