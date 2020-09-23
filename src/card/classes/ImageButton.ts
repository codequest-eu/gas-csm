import { Icon } from "../enums/Icon";
import { ActionComputedProps } from "./Action";
import { ButtonComputedProps } from "./Button";
import { Widget } from "./Widget";

export interface ImageButtonComputedProps extends ButtonComputedProps {
  alt?: string;
  icon?: Icon;
  iconUrl?: string;
  onClickAction: ActionComputedProps;
}

export class ImageButton extends Widget<ImageButtonComputedProps> {}
