import { BaseClassData } from "../../base/BaseClass";
import { SuggestionsComputedProps } from "./Suggestions";
import { ActionComputedProps } from "./Action";
import { Widget } from "./Widget";

export interface TextInputComputedProps extends BaseClassData {
  fieldName: string;
  title?: string;
  hint?: string;
  multiline?: string;
  suggestions?: SuggestionsComputedProps;
  suggestionsAction?: ActionComputedProps;
  onChangeAction?: ActionComputedProps;
}

export class TextInput extends Widget<TextInputComputedProps> {}
