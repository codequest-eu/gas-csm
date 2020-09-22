"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const DecoratedText_1 = require("./classes/DecoratedText");
const CardSection_1 = require("./classes/CardSection");
class CardService {
    static newDecoratedText() {
        return new DecoratedText_1.DecoratedText();
    }
    static newCardSection() {
        return new CardSection_1.CardSection();
    }
}
exports.CardService = CardService;
