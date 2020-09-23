import { BaseClassData } from "../../base/BaseClass";
import { ActionComputedProps } from "./Action";
import { Widget } from "./Widget";

export interface DecoratedTextComputedProps extends BaseClassData {
  iconUrl?: string;
  icon?: GoogleAppsScript.Card_Service.Icon;
  text: string;
  topLabel?: string;
  bottomLabel?: string;
  onClickAction?: ActionComputedProps;
}

export class DecoratedText extends Widget<DecoratedTextComputedProps> {}
