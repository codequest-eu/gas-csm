import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { OpenLink } from "./OpenLink";
import { Navigation } from "./Navigation";
import { Notification } from "./Notification";
import { ActionResponse } from "./ActionResponse";

export class ActionResponseBuilder extends BaseClass<ActionResponseBuilder> {
  build() {
    return new ActionResponse(this.getData());
  }
}
