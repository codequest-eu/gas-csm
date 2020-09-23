"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;
const BaseClass_1 = require("../../base/BaseClass");
class Navigation extends BaseClass_1.BaseClass {
    constructor() {
        super();
        this._data.cards = [];
    }
    pushCard(card) {
        this._data.cards.push({ nav: "push", card: card.getData() });
        return this;
    }
    updateCard(card) {
        this._data.cards.push({ nav: "update", card: card.getData() });
        return this;
    }
    popCard() {
        this._data.cards.push({ nav: "pop", card: null });
        return this;
    }
    popToRoot() {
        this._data.cards.push({ nav: "popToRoot", card: null });
        return this;
    }
}
exports.Navigation = Navigation;
