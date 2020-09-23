import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { UniversalActionResponse } from "./UniversalActionResponse";
import { Card, CardComputedProps } from "./Card";

export interface UniversalActionResponseBuilderComputedProps
  extends BaseClassData {
  cards: CardComputedProps[];
}

export class UniversalActionResponseBuilder extends BaseClass<
  UniversalActionResponseBuilderComputedProps
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
