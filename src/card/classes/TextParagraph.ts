import { BaseClassData } from "../../base/BaseClass";
import { Widget } from "./Widget";

export interface TextParagraphComputedProps extends BaseClassData {
  text: string;
}

export class TextParagraph extends Widget<TextParagraphComputedProps> {}
