import { BaseClass, BaseClassData } from "../../base/BaseClass";

export interface ActionComputedProps extends BaseClassData {
  functionName: string;
  parameters: any;
}

export class Action extends BaseClass<ActionComputedProps> {}
