import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { UniversalActionResponse } from "./UniversalActionResponse";
import { Card } from "./Card";

export interface UniversalActionResponseBuilder extends BaseClassData {
  cards: Card[];
}

export class UniversalActionResponseBuilder extends BaseClass<
  UniversalActionResponseBuilder
> {
  build() {
    return new UniversalActionResponse(this.getData());
  }

  setCards(cardObjects: Card[]) {
    this._data.cards = cardObjects.map(c => c.getData());
  }

  displayAddOnCards(cards = []) {
    this.setCards(cards);

    return this;
  }
}
