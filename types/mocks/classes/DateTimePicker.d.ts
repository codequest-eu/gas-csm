import { Action } from "./Action";
import { BaseClassData } from "../../base/BaseClass";
import { Widget } from "./Widget";
export interface DateTimePicker extends BaseClassData {
    fieldName: string;
    onChangeAction?: Action;
    title?: string;
    valueInMsSinceEpoch?: number | string;
    timeZoneOffsetInMins?: number;
}
export declare class DateTimePicker extends Widget<DateTimePicker> {
}
