import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { Widget } from "./Widget";
export interface CardSection extends BaseClassData {
    widgets: Widget[];
    collapsible?: boolean;
    header?: string;
    numUncollapsibleWidgets?: number;
}
export declare class CardSection extends BaseClass<CardSection> {
    constructor();
    addWidget<T extends Widget>(widget: T): this;
}
