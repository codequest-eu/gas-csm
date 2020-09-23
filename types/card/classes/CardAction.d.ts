import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { AuthorizationActionComputedProps } from "./AuthorizationAction";
import { ActionComputedProps } from "./Action";
import { OpenLinkComputedProps } from "./OpenLink";
export interface CardActionComputedProps extends BaseClassData {
    authorizationAction?: AuthorizationActionComputedProps;
    composeAction?: ActionComputedProps;
    onClickAction?: ActionComputedProps;
    onClickOpenLinkAction?: ActionComputedProps;
    openLink?: OpenLinkComputedProps;
    text?: string;
}
export declare class CardAction extends BaseClass<CardActionComputedProps> {
}
