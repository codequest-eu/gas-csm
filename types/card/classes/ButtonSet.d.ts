import { BaseClassData, BaseClass } from "../../base/BaseClass";
import { Button } from "./Button";
export interface ButtonSet extends BaseClassData {
    buttons: Button[];
}
export declare class ButtonSet extends BaseClass<ButtonSet> {
}
