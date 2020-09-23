import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { ImageComputedProps } from "./Image";
import { ImageButtonComputedProps } from "./ImageButton";
import { DecoratedTextComputedProps } from "./DecoratedText";
import { SelectionInputComputedProps } from "./SelectionInput";
import { TextButtonComputedProps } from "./TextButton";
import { TextInputComputedProps } from "./TextInput";
import { TextParagraphComputedProps } from "./TextParagraph";
import { Widget } from "./Widget";
export declare type WidgetComputedProps = DecoratedTextComputedProps | ImageComputedProps | ImageButtonComputedProps | SelectionInputComputedProps | TextButtonComputedProps | TextInputComputedProps | TextParagraphComputedProps;
export interface CardSectionComputedProps extends BaseClassData {
    widgets: WidgetComputedProps[];
    collapsible?: boolean;
    header?: string;
    numUncollapsibleWidgets?: number;
}
export declare class CardSection extends BaseClass<CardSectionComputedProps> {
    constructor();
    addWidget<T extends Widget>(widget: T): this;
}
