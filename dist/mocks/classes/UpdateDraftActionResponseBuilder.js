"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDraftActionResponseBuilder = void 0;
const BaseClass_1 = require("../../base/BaseClass");
const UpdateDraftActionResponse_1 = require("./UpdateDraftActionResponse");
class UpdateDraftActionResponseBuilder extends BaseClass_1.BaseClass {
    build() {
        return new UpdateDraftActionResponse_1.UpdateDraftActionResponse(this.getData());
    }
}
exports.UpdateDraftActionResponseBuilder = UpdateDraftActionResponseBuilder;
