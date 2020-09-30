import { BaseClassData } from "../../base/BaseClass";
import { Suggestions } from "./Suggestions";
import { Action } from "./Action";
import { Widget } from "./Widget";
export interface TextInput extends BaseClassData {
    fieldName: string;
    title?: string;
    hint?: string;
    multiline?: string;
    suggestions?: Suggestions;
    suggestionsAction?: Action;
    onChangeAction?: Action;
}
export declare class TextInput extends Widget<TextInput> {
}
