import { TextButtonStyle } from "../enums/TextButtonStyle";
import { Widget } from "./Widget";
import { AuthorizationAction, Action, OpenLink } from "..";
import { BaseClassData } from "../../base/BaseClass";
export interface TextButton extends BaseClassData {
    text: string;
    textButtonStyle: TextButtonStyle;
    disabled?: boolean;
    backgroundColor?: string;
    authorizationAction?: AuthorizationAction;
    composeAction?: Action;
    onClickAction?: Action;
    onClickOpenLinkAction?: Action;
    openLink?: OpenLink;
}
export declare class TextButton extends Widget<TextButton> {
}
