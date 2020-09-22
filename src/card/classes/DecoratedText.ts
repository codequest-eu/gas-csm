import { BaseClass, BaseClassData } from "../../base/BaseClass";

export interface DecoratedTextComputedProps extends BaseClassData {
  iconUrl?: string;
  icon?: GoogleAppsScript.Card_Service.Icon;
  text: string;
  topLabel?: string;
  bottomLabel?: string;
  //   onClickAction?: Spec.MockedAction;
}

export class DecoratedText extends BaseClass<DecoratedTextComputedProps> {}
