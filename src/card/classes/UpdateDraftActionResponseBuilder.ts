import { BaseClass } from "../../base/BaseClass";
import { UpdateDraftActionResponse } from "./UpdateDraftActionResponse";

export class UpdateDraftActionResponseBuilder extends BaseClass {
  build() {
    return new UpdateDraftActionResponse(this.getData());
  }
}
