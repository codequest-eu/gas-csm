"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationException = void 0;
const BaseClass_1 = require("../../base/BaseClass");
class AuthorizationException extends BaseClass_1.BaseClass {
    throwException() {
        // eslint-disable-next-line no-throw-literal
        throw this;
    }
}
exports.AuthorizationException = AuthorizationException;
