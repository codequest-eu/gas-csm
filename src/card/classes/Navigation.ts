import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { Card, CardComputedProps } from "./Card";

export interface NavigationComputedProps extends BaseClassData {
  cards: {
    nav: "push" | "update" | "pop" | "popToRoot";
    card: CardComputedProps | null;
  }[];
}

export class Navigation extends BaseClass<NavigationComputedProps> {
  constructor() {
    super();
    this._data.cards = [];
  }

  pushCard(card: Card) {
    this._data.cards.push({ nav: "push", card: card.getData() });
    return this;
  }

  updateCard(card: Card) {
    this._data.cards.push({ nav: "update", card: card.getData() });
    return this;
  }

  popCard() {
    this._data.cards.push({ nav: "pop", card: null });
    return this;
  }

  popToRoot() {
    this._data.cards.push({ nav: "popToRoot", card: null });
    return this;
  }
}
