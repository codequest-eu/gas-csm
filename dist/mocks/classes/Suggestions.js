"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suggestions = void 0;
const BaseClass_1 = require("../../base/BaseClass");
class Suggestions extends BaseClass_1.BaseClass {
    constructor() {
        super();
        this._data.suggestions = [];
    }
    addSuggestions(suggestions) {
        suggestions.forEach(s => {
            this.addSuggestion(s);
        });
        return this;
    }
    addSuggestion(suggestion) {
        this._data.suggestions.push(suggestion);
    }
}
exports.Suggestions = Suggestions;
