import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { Navigation, Notification, OpenLink } from "..";

export interface ActionResponse extends BaseClassData {
  navigation?: Navigation;
  notification?: Notification;
  openLink?: OpenLink;
  stateChanged?: boolean;
}

// instances of this class should never be created directly in user code
// only by ActionResponseBuilder
export class ActionResponse extends BaseClass<ActionResponse> {}
