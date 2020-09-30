import { BaseClassData } from "../../base/BaseClass";
import { Action } from "./Action";
import { Widget } from "./Widget";

export type SelectionInputItem = {
  text: string;
  value: any;
  selected: boolean;
};

export interface SelectionInput extends BaseClassData {
  title?: string;
  fieldName?: string;
  onChangeAction?: Action;
  items: SelectionInputItem[];
}

export class SelectionInput extends Widget<SelectionInput> {
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
