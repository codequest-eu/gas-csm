import { BaseClass } from "../../base/BaseClass";
import { Card } from "./Card";
import { CardAction } from "./CardAction";
import { CardHeader } from "./CardHeader";
import { CardSection } from "./CardSection";
import { FixedFooter } from "./FixedFooter";

export class CardBuilder extends BaseClass {
  _card: Card;
  constructor() {
    super();

    this._card = new Card();
  }

  addCardAction(cardAction: CardAction) {
    this._card.addCardAction(cardAction);

    return this;
  }

  setName(name: string) {
    this._card.setName(name);

    return this;
  }

  setHeader(header: CardHeader) {
    this._card.setHeader(header);

    return this;
  }

  addSection(section: CardSection) {
    this._card.addSection(section);

    return this;
  }

  setFixedFooter(fixedFooter: FixedFooter) {
    this._card.setFixedFooter(fixedFooter);
  }

  build() {
    return this._card;
  }
}
