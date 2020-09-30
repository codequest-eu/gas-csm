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
    private pushCard;
    private updateCard;
    private popCard;
    private popToRoot;
}
