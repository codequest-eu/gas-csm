import { BaseClass } from "../../base/BaseClass";
import { Card } from "./Card";
import { CardAction } from "./CardAction";
import { CardHeader } from "./CardHeader";
import { CardSection } from "./CardSection";
import { FixedFooter } from "./FixedFooter";
export declare class CardBuilder extends BaseClass {
    _card: Card;
    constructor();
    addCardAction(cardAction: CardAction): this;
    setName(name: string): this;
    setHeader(header: CardHeader): this;
    addSection(section: CardSection): this;
    setFixedFooter(fixedFooter: FixedFooter): void;
    build(): Card;
}
