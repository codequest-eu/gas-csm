import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { CardHeader, CardHeaderComputedProps } from "./CardHeader";
import { CardSection, CardSectionComputedProps } from "./CardSection";
import { CardAction, CardActionComputedProps } from "./CardAction";
import { FixedFooter } from "./FixedFooter";

export interface CardComputedProps extends BaseClassData {
  header?: CardHeaderComputedProps;
  name?: string;
  sections: CardSectionComputedProps[];
  cardActions: CardActionComputedProps[];
  fixedFooter?: FixedFooter;
}

export class Card extends BaseClass<CardComputedProps> {
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
