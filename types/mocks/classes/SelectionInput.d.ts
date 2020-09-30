import { BaseClassData } from "../../base/BaseClass";
import { Action } from "./Action";
import { Widget } from "./Widget";
export declare type SelectionInputItem = {
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
export declare class SelectionInput extends Widget<SelectionInput> {
    constructor();
    addItem(text: string, value: any, selected: boolean): this;
}
