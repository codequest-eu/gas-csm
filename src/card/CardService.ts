import { DecoratedText } from "./classes/DecoratedText";
import { CardSection } from "./classes/CardSection";

export class CardService {
  static newDecoratedText() {
    return new DecoratedText();
  }

  static newCardSection() {
    return new CardSection();
  }
}
