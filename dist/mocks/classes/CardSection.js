"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardSection = void 0;
const BaseClass_1 = require("../../base/BaseClass");
class CardSection extends BaseClass_1.BaseClass {
    constructor() {
        super();
        this._data.widgets = [];
    }
    addWidget(widget) {
        this._data.widgets.push(widget.getData());
        return this;
    }
}
exports.CardSection = CardSection;
