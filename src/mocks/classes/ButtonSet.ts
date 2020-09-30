import { BaseClassData, BaseClass } from "../../base/BaseClass";
import { Button } from "./Button";

export interface ButtonSet extends BaseClassData {
  buttons: Button[];
}

export class ButtonSet extends BaseClass<ButtonSet> {}
