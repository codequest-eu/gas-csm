"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComposeActionResponseBuilder = void 0;
const BaseClass_1 = require("../../base/BaseClass");
const ComposeActionResponse_1 = require("./ComposeActionResponse");
class ComposeActionResponseBuilder extends BaseClass_1.BaseClass {
    build() {
        return new ComposeActionResponse_1.ComposeActionResponse(this.getData());
    }
}
exports.ComposeActionResponseBuilder = ComposeActionResponseBuilder;
