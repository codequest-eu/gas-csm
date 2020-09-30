import { CardSection } from "../mocks/classes/CardSection";
import { findByTextInCard, findByTextInSection, findByType } from "./queries";
import {
  Card,
  ActionResponseBuilder,
  ActionResponse,
  Navigation,
} from "../mocks";
import { BaseClassData } from "../base/BaseClass";

export function buildSection(
  section: GoogleAppsScript.Card_Service.CardSection & {
    getData?: () => CardSection;
  }
) {
  if (!section.getData) {
    throw new Error(
      "Card section not mocked properly: no getData function found."
    );
  }

  const mockData = section.getData();

  return buildSectionResult(mockData);
}

export function buildCard(
  card: GoogleAppsScript.Card_Service.Card & {
    getData?: () => Card;
  }
) {
  if (!card.getData) {
    throw new Error("Card not mocked properly: no getData function found.");
  }

  const mockData = card.getData();
  return buildCardResult(mockData);
}

function buildCardResult(mockData: Card) {
  const { sections, fixedFooter, header, name, cardActions } = mockData;

  if (sections && sections.length === 0) {
    throw new Error("Every card has to contain at least one section.");
  }

  return {
    findByText: findByTextInCard(mockData),
    findByType: findByType(mockData),
    sections: (sections || []).map(buildSectionResult),
    fixedFooter,
    header,
    name,
    cardActions,
    debug: debug(mockData),
  };
}

export function buildActionResponse(
  actionResponse: GoogleAppsScript.Card_Service.ActionResponse & {
    getData?: () => ActionResponse;
  }
) {
  if (!actionResponse.getData) {
    throw new Error(
      "ActionResponse not mocked properly: no getData function found."
    );
  }

  const mockData = actionResponse.getData();

  const currentCard =
    mockData.navigation && mockData.navigation.cards.reverse()[0].card;

  return {
    debug: debug(mockData),
    ...mockData,
    card: currentCard ? buildCardResult(currentCard) : null,
    notified: Boolean(mockData.notification),
    navigation: mockData.navigation && {
      ...mockData.navigation,
      cards: mockData.navigation.cards.map(({ nav, card }) => ({
        nav,
        card: card ? buildCardResult(card) : card,
      })),
    },
  };
}

function buildSectionResult(mockData: CardSection) {
  const { widgets } = mockData;

  if (!widgets || widgets.length === 0) {
    throw new Error("Every section has to contain at least one widget.");
  }

  return {
    findByText: findByTextInSection(mockData),
    findByType: findByType(mockData),
    widgets: (mockData.widgets || []).map(w => ({
      ...w,
      debug: debug(w),
    })),
    debug: debug(mockData),
  };
}

function debug(mockData: BaseClassData) {
  return function () {
    console.log(`Debug ${mockData.type}`);
    console.log(JSON.stringify(mockData, null, 2));
  };
}
