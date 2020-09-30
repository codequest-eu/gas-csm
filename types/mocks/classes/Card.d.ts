import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { CardHeader } from "./CardHeader";
import { CardSection } from "./CardSection";
import { CardAction } from "./CardAction";
import { FixedFooter } from "./FixedFooter";
export interface Card extends BaseClassData {
    header?: CardHeader;
    name?: string;
    sections: CardSection[];
    cardActions: CardAction[];
    fixedFooter?: FixedFooter;
}
export declare class Card extends BaseClass<Card> {
    setHeader(header: CardHeader): void;
    setName(name: string): void;
    addSection(section: CardSection): void;
    addCardAction(action: CardAction): void;
    setFixedFooter(fixedFooter: FixedFooter): void;
    constructor();
    printJson(): Card & {
        type: string;
    };
}
