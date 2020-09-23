"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComposeActionResponse = void 0;
const BaseClass_1 = require("../../base/BaseClass");
// instances of this class should never be created directly in user code
// only by ComposeActionResponseBuilder
class ComposeActionResponse extends BaseClass_1.BaseClass {
    printJson() {
        return this.getData();
    }
}
exports.ComposeActionResponse = ComposeActionResponse;
