import { BaseClass, BaseClassData } from "../../base/BaseClass";

export interface NotificationComputedProps extends BaseClassData {
  text: string;
}

export class Notification extends BaseClass<NotificationComputedProps> {}
