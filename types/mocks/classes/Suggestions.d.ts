import { BaseClass, BaseClassData } from "../../base/BaseClass";
export interface Suggestions extends BaseClassData {
    suggestions: string[];
}
export declare class Suggestions extends BaseClass<Suggestions> {
    constructor();
    addSuggestions(suggestions: string[]): this;
    addSuggestion(suggestion: string): void;
}
