import { Action } from "./Action";
import { BaseClassData } from "../../base/BaseClass";
import { Widget } from "./Widget";
export interface DatePicker extends BaseClassData {
    fieldName: string;
    onChangeAction?: Action;
    title?: string;
    valueInMsSinceEpoch?: number | string;
}
export declare class DatePicker extends Widget<DatePicker> {
}
