import { BaseClass } from "../../base/BaseClass";
import { BaseClassData } from "../../base/BaseClass";
import { TextButton } from "./TextButton";

export interface FixedFooter extends BaseClassData {
  primaryButton?: TextButton;
  secondaryButton?: TextButton;
}

export class FixedFooter extends BaseClass<FixedFooter> {}
