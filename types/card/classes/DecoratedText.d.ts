/// <reference types="google-apps-script" />
import { BaseClass, BaseClassData } from "../../base/BaseClass";
export interface DecoratedTextComputedProps extends BaseClassData {
    iconUrl?: string;
    icon?: GoogleAppsScript.Card_Service.Icon;
    text: string;
    topLabel?: string;
    bottomLabel?: string;
}
export declare class DecoratedText extends BaseClass<DecoratedTextComputedProps> {
}
