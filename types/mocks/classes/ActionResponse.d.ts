import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { Navigation, Notification, OpenLink } from "..";
export interface ActionResponse extends BaseClassData {
    navigation?: Navigation;
    notification?: Notification;
    openLink?: OpenLink;
    stateChanged?: boolean;
}
export declare class ActionResponse extends BaseClass<ActionResponse> {
}
