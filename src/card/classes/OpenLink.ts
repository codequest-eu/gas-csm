import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { OnClose } from "../enums/OnClose";
import { OpenAs } from "../enums/OpenAs";

export interface OpenLinkComputedProps extends BaseClassData {
  onClose?: OnClose;
  openAs?: OpenAs;
  url: string;
}

export class OpenLink extends BaseClass<OpenLinkComputedProps> {}
