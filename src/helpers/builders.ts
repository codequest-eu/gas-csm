import { CardSectionComputedProps } from "../card/classes/CardSection";
import { findByText, findByType } from "./queries";
import { CardComputedProps } from "../card";

export function buildSection(
  section: GoogleAppsScript.Card_Service.CardSection & {
    getData?: () => CardSectionComputedProps;
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
    getData?: () => CardComputedProps;
  }
) {
  if (!card.getData) {
    throw new Error("Card not mocked properly: no getData function found.");
  }

  const mockData = card.getData();

  const { sections } = mockData;

  if (!sections || sections.length === 0) {
    throw new Error("Every card has to contain at least one section.");
  }

  return {
    findByText: findByText(mockData),
    findByType: findByType(mockData),
    sections: mockData.sections.map(buildSectionResult),
    fixedFooter: mockData.fixedFooter,
    header: mockData.header,
    name: mockData.name,
    cardActions: mockData.cardActions,
    debug: () => {
      console.log(JSON.stringify(mockData, null, 2));
    },
  };
}

function buildSectionResult(mockData: CardSectionComputedProps) {
  const { widgets } = mockData;

  if (!widgets || widgets.length === 0) {
    throw new Error("Every section has to contain at least one widget.");
  }

  return {
    findByText: findByText(mockData),
    findByType: findByType(mockData),
    widgets: mockData.widgets || [],
    debug: () => {
      console.log(JSON.stringify(mockData, null, 2));
    },
  };
}
