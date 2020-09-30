import { CardSection } from "../mocks/classes/CardSection";
import { findByTextInCard, findByTextInSection, findByType } from "./queries";
import { Card } from "../mocks";
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

  const { sections } = mockData;

  if (sections && sections.length === 0) {
    throw new Error("Every card has to contain at least one section.");
  }

  return {
    findByText: findByTextInCard(mockData),
    findByType: findByType(mockData),
    sections: (mockData.sections || []).map(buildSectionResult),
    fixedFooter: mockData.fixedFooter,
    header: mockData.header,
    name: mockData.name,
    cardActions: mockData.cardActions,
    debug: debug(mockData),
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
