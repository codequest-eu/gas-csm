import { BaseClass } from "../../base/BaseClass";

export class AuthorizationException extends BaseClass {
  throwException() {
    // eslint-disable-next-line no-throw-literal
    throw this;
  }
}
