import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { ImageComputedProps } from "./Image";
import { ImageButtonComputedProps } from "./ImageButton";
import { DecoratedTextComputedProps } from "./DecoratedText";
import { SelectionInputComputedProps } from "./SelectionInput";
import { TextButtonComputedProps } from "./TextButton";
import { TextInputComputedProps } from "./TextInput";
import { TextParagraphComputedProps } from "./TextParagraph";
import { Widget } from "./Widget";

export type WidgetComputedProps =
  | DecoratedTextComputedProps
  | ImageComputedProps
  | ImageButtonComputedProps
  | SelectionInputComputedProps
  | TextButtonComputedProps
  | TextInputComputedProps
  | TextParagraphComputedProps;

export interface CardSectionComputedProps extends BaseClassData {
  widgets: WidgetComputedProps[];
  collapsible?: boolean;
  header?: string;
  numUncollapsibleWidgets?: number;
}

export class CardSection extends BaseClass<CardSectionComputedProps> {
  constructor() {
    super();
    this._data.widgets = [];
  }

  addWidget<T extends Widget>(widget: T) {
    this._data.widgets.push(
      (widget.getData() as unknown) as CardSectionComputedProps["widgets"][number]
    );

    return this;
  }
}
