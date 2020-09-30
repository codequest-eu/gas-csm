"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const BaseClass_1 = require("../../base/BaseClass");
class Card extends BaseClass_1.BaseClass {
    setHeader(header) {
        this._data.header = header.getData();
    }
    setName(name) {
        this._data.name = name;
    }
    addSection(section) {
        this._data.sections.push(section.getData());
    }
    addCardAction(action) {
        this._data.cardActions.push(action.getData());
    }
    setFixedFooter(fixedFooter) {
        this._data.fixedFooter = fixedFooter;
    }
    constructor() {
        super();
        this._data.sections = [];
        this._data.cardActions = [];
    }
    printJson() {
        return this.getData();
    }
}
exports.Card = Card;
