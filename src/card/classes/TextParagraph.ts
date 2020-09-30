import { BaseClassData } from "../../base/BaseClass";
import { Widget } from "./Widget";

export interface TextParagraph extends BaseClassData {
  text: string;
}

export class TextParagraph extends Widget<TextParagraph> {}
