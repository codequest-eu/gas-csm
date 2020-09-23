import { BaseClassData } from "../../base/BaseClass";
import { ActionComputedProps } from "./Action";
import { Widget } from "./Widget";

export type SelectionInputItem = {
  text: string;
  value: any;
  selected: boolean;
};

export interface SelectionInputComputedProps extends BaseClassData {
  title?: string;
  fieldName?: string;
  onChangeAction?: ActionComputedProps;
  items: SelectionInputItem[];
}

export class SelectionInput extends Widget<SelectionInputComputedProps> {
  constructor() {
    super();

    this._data.items = [];
  }

  addItem(text: string, value: any, selected: boolean) {
    this._data.items.push({
      text,
      value,
      selected,
    });

    return this;
  }
}
