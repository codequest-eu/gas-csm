import { BaseClass, BaseClassData } from "../../base/BaseClass";

export interface CardSectionComputedProps extends BaseClassData {
  widgets: any[];
}

export class CardSection extends BaseClass<CardSectionComputedProps> {}
