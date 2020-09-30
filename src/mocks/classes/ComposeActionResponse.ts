import { BaseClass } from "../../base/BaseClass";

// instances of this class should never be created directly in user code
// only by ComposeActionResponseBuilder
export class ComposeActionResponse extends BaseClass {
  printJson() {
    return this.getData();
  }
}
