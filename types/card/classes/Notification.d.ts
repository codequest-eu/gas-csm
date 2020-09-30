import { BaseClass, BaseClassData } from "../../base/BaseClass";
export interface Notification extends BaseClassData {
    text: string;
}
export declare class Notification extends BaseClass<Notification> {
}
