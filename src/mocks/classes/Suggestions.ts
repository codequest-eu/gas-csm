import { BaseClass, BaseClassData } from "../../base/BaseClass";

export interface Suggestions extends BaseClassData {
  suggestions: string[];
}

export class Suggestions extends BaseClass<Suggestions> {
  constructor() {
    super();
    this._data.suggestions = [];
  }

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
