import { ActionComputedProps } from "./Action";
import { BaseClassData } from "../../base/BaseClass";
import { Widget } from "./Widget";
export interface DateTimePickerComputedProps extends BaseClassData {
    fieldName: string;
    onChangeAction?: ActionComputedProps;
    title?: string;
    valueInMsSinceEpoch?: number | string;
    timeZoneOffsetInMins?: number;
}
export declare class DateTimePicker extends Widget<DateTimePickerComputedProps> {
}
