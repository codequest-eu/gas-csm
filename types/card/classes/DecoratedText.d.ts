/// <reference types="google-apps-script" />
import { BaseClassData } from "../../base/BaseClass";
import { Action } from "./Action";
import { Widget } from "./Widget";
export interface DecoratedText extends BaseClassData {
    iconUrl?: string;
    icon?: GoogleAppsScript.Card_Service.Icon;
    text: string;
    topLabel?: string;
    bottomLabel?: string;
    onClickAction?: Action;
}
export declare class DecoratedText extends Widget<DecoratedText> {
}
