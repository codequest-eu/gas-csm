import { ActionComputedProps } from "./Action";
import { BaseClassData } from "../../base/BaseClass";
import { Widget } from "./Widget";

export interface ImageComputedProps extends BaseClassData {
  imageUrl: string;
  altText?: string;
  onClickAction?: ActionComputedProps;
}

export class Image extends Widget<ImageComputedProps> {}
