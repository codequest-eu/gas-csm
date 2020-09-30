import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { Card } from "./Card";
export interface Navigation extends BaseClassData {
    cards: {
        nav: "push" | "update" | "pop" | "popToRoot";
        card: Card | null;
    }[];
}
export declare class Navigation extends BaseClass<Navigation> {
    constructor();
    pushCard(card: Card): this;
    updateCard(card: Card): this;
    popCard(): this;
    popToRoot(): this;
}
