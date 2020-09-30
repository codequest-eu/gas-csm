import { BaseClass } from "../../base/BaseClass";
import { BaseClassData } from "../../base/BaseClass";
import { AuthorizationAction } from "./AuthorizationAction";
import { Action } from "./Action";
import { OpenLink } from "./OpenLink";
export interface Button extends BaseClassData {
    authorizationAction?: AuthorizationAction;
    composeAction?: Action;
    onClickAction?: Action;
    onClickOpenLinkAction?: Action;
    openLink?: OpenLink;
}
export declare class Button extends BaseClass<Button> {
}
