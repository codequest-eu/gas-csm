"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversalActionResponseBuilder = void 0;
const BaseClass_1 = require("../../base/BaseClass");
const UniversalActionResponse_1 = require("./UniversalActionResponse");
class UniversalActionResponseBuilder extends BaseClass_1.BaseClass {
    build() {
        return new UniversalActionResponse_1.UniversalActionResponse(this.getData());
    }
    setCards(cardObjects) {
        this._data.cards = cardObjects.map(c => c.getData());
    }
    displayAddOnCards(cards = []) {
        this.setCards(cards);
        return this;
    }
}
exports.UniversalActionResponseBuilder = UniversalActionResponseBuilder;
