import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { AuthorizationAction } from "./AuthorizationAction";
import { Action } from "./Action";
import { OpenLink } from "./OpenLink";
export interface CardAction extends BaseClassData {
    authorizationAction?: AuthorizationAction;
    composeAction?: Action;
    onClickAction?: Action;
    onClickOpenLinkAction?: Action;
    openLink?: OpenLink;
    text?: string;
}
export declare class CardAction extends BaseClass<CardAction> {
}
