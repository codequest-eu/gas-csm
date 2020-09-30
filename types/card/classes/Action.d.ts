import { BaseClass, BaseClassData } from "../../base/BaseClass";
export interface Action extends BaseClassData {
    functionName: string;
    parameters: any;
}
export declare class Action extends BaseClass<Action> {
}
