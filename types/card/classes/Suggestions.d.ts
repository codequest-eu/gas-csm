import { BaseClass, BaseClassData } from "../../base/BaseClass";
export interface SuggestionsComputedProps extends BaseClassData {
    suggestions: string[];
}
export declare class Suggestions extends BaseClass<SuggestionsComputedProps> {
    addSuggestions(suggestions: string[]): this;
    addSuggestion(suggestion: string): void;
}
