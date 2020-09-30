"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionResponseBuilder = void 0;
const BaseClass_1 = require("../../base/BaseClass");
const ActionResponse_1 = require("./ActionResponse");
class ActionResponseBuilder extends BaseClass_1.BaseClass {
    build() {
        return new ActionResponse_1.ActionResponse(this.getData());
    }
}
exports.ActionResponseBuilder = ActionResponseBuilder;
