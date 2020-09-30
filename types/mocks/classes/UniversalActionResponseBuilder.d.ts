import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { UniversalActionResponse } from "./UniversalActionResponse";
import { Card } from "./Card";
export interface UniversalActionResponseBuilder extends BaseClassData {
    cards: Card[];
}
export declare class UniversalActionResponseBuilder extends BaseClass<UniversalActionResponseBuilder> {
    build(): UniversalActionResponse;
    setCards(cardObjects: Card[]): void;
    displayAddOnCards(cards?: never[]): this;
}
