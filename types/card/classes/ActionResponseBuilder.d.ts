import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { OpenLinkComputedProps } from "./OpenLink";
import { NavigationComputedProps } from "./Navigation";
import { NotificationComputedProps } from "./Notification";
import { ActionResponse } from "./ActionResponse";
export interface ActionResponseBuilderComputedProps extends BaseClassData {
    navigation?: NavigationComputedProps;
    notification?: NotificationComputedProps;
    openLink?: OpenLinkComputedProps;
    stateChanged?: boolean;
}
export declare class ActionResponseBuilder extends BaseClass {
    build(): ActionResponse;
}
