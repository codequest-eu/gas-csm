import { BaseClass, BaseClassData } from "../../base/BaseClass";
export interface AuthorizationAction extends BaseClassData {
    authorizationUrl: string;
}
export declare class AuthorizationAction extends BaseClass<AuthorizationAction> {
}
