import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { ImageStyle } from "../enums/ImageStyle";

export interface CardHeaderComputedProps extends BaseClassData {
  imageAltText?: string;
  imageStyle?: ImageStyle;
  imageUrl?: string;
  subtitle?: string;
  title?: string;
}

export class CardHeader extends BaseClass<CardHeaderComputedProps> {}
