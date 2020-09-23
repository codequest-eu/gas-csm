import { ButtonComputedProps } from "./Button";
import { TextButtonStyle } from "../enums/TextButtonStyle";
import { Widget } from "./Widget";
export interface TextButtonComputedProps extends ButtonComputedProps {
    text: string;
    textButtonStyle: TextButtonStyle;
    disabled?: boolean;
    backgroundColor?: string;
}
export declare class TextButton extends Widget<TextButtonComputedProps> {
}
