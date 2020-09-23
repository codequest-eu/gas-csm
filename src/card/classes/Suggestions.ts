import { BaseClass, BaseClassData } from "../../base/BaseClass";

export interface SuggestionsComputedProps extends BaseClassData {
  suggestions: string[];
}

export class Suggestions extends BaseClass<SuggestionsComputedProps> {
  addSuggestions(suggestions: string[]) {
    suggestions.forEach(s => {
      this.addSuggestion(s);
    });

    return this;
  }

  addSuggestion(suggestion: string) {
    this._data.suggestions.push(suggestion);
  }
}
