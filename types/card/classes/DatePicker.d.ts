import { ActionComputedProps } from "./Action";
import { BaseClassData } from "../../base/BaseClass";
import { Widget } from "./Widget";
export interface DatePickerComputedProps extends BaseClassData {
    fieldName: string;
    onChangeAction?: ActionComputedProps;
    title?: string;
    valueInMsSinceEpoch?: number | string;
}
export declare class DatePicker extends Widget<DatePickerComputedProps> {
}
