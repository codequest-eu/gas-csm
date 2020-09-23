import { BaseClass, BaseClassData } from "../../base/BaseClass";

export interface AuthorizationActionComputedProps extends BaseClassData {
  authorizationUrl: string;
}

export class AuthorizationAction extends BaseClass<
  AuthorizationActionComputedProps
> {}
