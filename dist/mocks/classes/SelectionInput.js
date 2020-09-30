"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionInput = void 0;
const Widget_1 = require("./Widget");
class SelectionInput extends Widget_1.Widget {
    constructor() {
        super();
        this._data.items = [];
    }
    addItem(text, value, selected) {
        this._data.items.push({
            text,
            value,
            selected,
        });
        return this;
    }
}
exports.SelectionInput = SelectionInput;
