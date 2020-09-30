import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { Widget } from "./Widget";

export interface CardSection extends BaseClassData {
  widgets: Widget[];
  collapsible?: boolean;
  header?: string;
  numUncollapsibleWidgets?: number;
}

export class CardSection extends BaseClass<CardSection> {
  constructor() {
    super();
    this._data.widgets = [];
  }

  addWidget<T extends Widget>(widget: T) {
    this._data.widgets.push(
      (widget.getData() as unknown) as CardSection["widgets"][number]
    );

    return this;
  }
}
