import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { UniversalActionResponse } from "./UniversalActionResponse";
import { Card, CardComputedProps } from "./Card";
export interface UniversalActionResponseBuilderComputedProps extends BaseClassData {
    cards: CardComputedProps[];
}
export declare class UniversalActionResponseBuilder extends BaseClass<UniversalActionResponseBuilderComputedProps> {
    build(): UniversalActionResponse;
    setCards(cardObjects: Card[]): void;
    displayAddOnCards(cards?: never[]): this;
}
