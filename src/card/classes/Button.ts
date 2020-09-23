import { BaseClass } from "../../base/BaseClass";
import { BaseClassData } from "../../base/BaseClass";
import { AuthorizationActionComputedProps } from "./AuthorizationAction";
import { ActionComputedProps } from "./Action";
import { OpenLinkComputedProps } from "./OpenLink";

export interface ButtonComputedProps extends BaseClassData {
  authorizationAction?: AuthorizationActionComputedProps;
  composeAction?: ActionComputedProps;
  onClickAction?: ActionComputedProps;
  onClickOpenLinkAction?: ActionComputedProps;
  openLink?: OpenLinkComputedProps;
}

export class Button extends BaseClass<ButtonComputedProps> {}
