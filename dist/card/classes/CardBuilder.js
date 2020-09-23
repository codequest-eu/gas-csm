"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardBuilder = void 0;
const BaseClass_1 = require("../../base/BaseClass");
const Card_1 = require("./Card");
class CardBuilder extends BaseClass_1.BaseClass {
    constructor() {
        super();
        this._card = new Card_1.Card();
    }
    addCardAction(cardAction) {
        this._card.addCardAction(cardAction);
        return this;
    }
    setName(name) {
        this._card.setName(name);
        return this;
    }
    setHeader(header) {
        this._card.setHeader(header);
        return this;
    }
    addSection(section) {
        this._card.addSection(section);
        return this;
    }
    setFixedFooter(fixedFooter) {
        this._card.setFixedFooter(fixedFooter);
    }
    build() {
        return this._card;
    }
}
exports.CardBuilder = CardBuilder;
