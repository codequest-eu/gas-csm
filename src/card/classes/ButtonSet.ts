import { BaseClassData, BaseClass } from "../../base/BaseClass";
import { ButtonComputedProps } from "./Button";

export interface ButtonSetComputedProps extends BaseClassData {
  buttons: ButtonComputedProps[];
}

export class ButtonSet extends BaseClass<ButtonSetComputedProps> {}
