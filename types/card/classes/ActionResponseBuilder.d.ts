import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { OpenLink } from "./OpenLink";
import { Navigation } from "./Navigation";
import { Notification } from "./Notification";
import { ActionResponse } from "./ActionResponse";
export interface ActionResponseBuilder extends BaseClassData {
    navigation?: Navigation;
    notification?: Notification;
    openLink?: OpenLink;
    stateChanged?: boolean;
}
export declare class ActionResponseBuilder extends BaseClass {
    build(): ActionResponse;
}
