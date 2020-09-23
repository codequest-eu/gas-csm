import { BaseClass } from "../../base/BaseClass";
import { ComposeActionResponse } from "./ComposeActionResponse";

export class ComposeActionResponseBuilder extends BaseClass {
  build() {
    return new ComposeActionResponse(this.getData());
  }
}
