import { Icon } from "../enums/Icon";
import { Action } from "./Action";
import { Widget } from "./Widget";
import { BaseClassData } from "../../base/BaseClass";
import { AuthorizationAction, OpenLink } from "..";

export interface ImageButton extends BaseClassData {
  alt?: string;
  icon?: Icon;
  iconUrl?: string;
  authorizationAction?: AuthorizationAction;
  composeAction?: Action;
  onClickAction?: Action;
  onClickOpenLinkAction?: Action;
  openLink?: OpenLink;
}

export class ImageButton extends Widget<ImageButton> {}
