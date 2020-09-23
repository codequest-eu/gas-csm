import { BaseClassData } from "../../base/BaseClass";
import { ActionComputedProps } from "./Action";
import { Widget } from "./Widget";
export declare type SelectionInputItem = {
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
export declare class SelectionInput extends Widget<SelectionInputComputedProps> {
    constructor();
    addItem(text: string, value: any, selected: boolean): this;
}
