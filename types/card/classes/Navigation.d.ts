import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { Card, CardComputedProps } from "./Card";
export interface NavigationComputedProps extends BaseClassData {
    cards: {
        nav: "push" | "update" | "pop" | "popToRoot";
        card: CardComputedProps | null;
    }[];
}
export declare class Navigation extends BaseClass<NavigationComputedProps> {
    constructor();
    pushCard(card: Card): this;
    updateCard(card: Card): this;
    popCard(): this;
    popToRoot(): this;
}
