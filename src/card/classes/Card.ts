import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { CardHeader } from "./CardHeader";
import { CardSection } from "./CardSection";
import { CardAction } from "./CardAction";
import { FixedFooter } from "./FixedFooter";

export interface Card extends BaseClassData {
  header?: CardHeader;
  name?: string;
  sections: CardSection[];
  cardActions: CardAction[];
  fixedFooter?: FixedFooter;
}

export class Card extends BaseClass<Card> {
  setHeader(header: CardHeader) {
    this._data.header = header.getData();
  }

  setName(name: string) {
    this._data.name = name;
  }

  addSection(section: CardSection) {
    this._data.sections.push(section.getData());
  }

  addCardAction(action: CardAction) {
    this._data.cardActions.push(action.getData());
  }

  setFixedFooter(fixedFooter: FixedFooter) {
    this._data.fixedFooter = fixedFooter;
  }

  constructor() {
    super();
    this._data.sections = [];
    this._data.cardActions = [];
  }

  printJson() {
    return this.getData();
  }
}
