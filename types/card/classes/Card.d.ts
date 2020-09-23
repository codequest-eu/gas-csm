import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { CardHeader, CardHeaderComputedProps } from "./CardHeader";
import { CardSection, CardSectionComputedProps } from "./CardSection";
import { CardAction, CardActionComputedProps } from "./CardAction";
import { FixedFooter } from "./FixedFooter";
export interface CardComputedProps extends BaseClassData {
    header?: CardHeaderComputedProps;
    name?: string;
    sections: CardSectionComputedProps[];
    cardActions: CardActionComputedProps[];
    fixedFooter?: FixedFooter;
}
export declare class Card extends BaseClass<CardComputedProps> {
    setHeader(header: CardHeader): void;
    setName(name: string): void;
    addSection(section: CardSection): void;
    addCardAction(action: CardAction): void;
    setFixedFooter(fixedFooter: FixedFooter): void;
    constructor();
    printJson(): CardComputedProps & {
        type: string;
    };
}
