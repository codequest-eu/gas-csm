import { BaseClass, BaseClassData } from "../../base/BaseClass";

export class Widget<T extends BaseClassData = BaseClassData> extends BaseClass<
  T
> {}
