"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildActionResponse = exports.buildCard = exports.buildSection = void 0;
const queries_1 = require("./queries");
function buildSection(section) {
    if (!section.getData) {
        throw new Error("Card section not mocked properly: no getData function found.");
    }
    const mockData = section.getData();
    return buildSectionResult(mockData);
}
exports.buildSection = buildSection;
function buildCard(card) {
    if (!card.getData) {
        throw new Error("Card not mocked properly: no getData function found.");
    }
    const mockData = card.getData();
    return buildCardResult(mockData);
}
exports.buildCard = buildCard;
function buildCardResult(mockData) {
    const { sections, fixedFooter, header, name, cardActions } = mockData;
    if (sections && sections.length === 0) {
        throw new Error("Every card has to contain at least one section.");
    }
    return {
        findByText: queries_1.findByTextInCard(mockData),
        findByType: queries_1.findByType(mockData),
        sections: (sections || []).map(buildSectionResult),
        fixedFooter,
        header,
        name,
        cardActions,
        debug: debug(mockData),
    };
}
function buildActionResponse(actionResponse) {
    if (!actionResponse.getData) {
        throw new Error("ActionResponse not mocked properly: no getData function found.");
    }
    const mockData = actionResponse.getData();
    const currentCard = mockData.navigation && mockData.navigation.cards.reverse()[0].card;
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
exports.buildActionResponse = buildActionResponse;
function buildSectionResult(mockData) {
    const { widgets } = mockData;
    if (!widgets || widgets.length === 0) {
        throw new Error("Every section has to contain at least one widget.");
    }
    return {
        findByText: queries_1.findByTextInSection(mockData),
        findByType: queries_1.findByType(mockData),
        widgets: (mockData.widgets || []).map(w => ({
            ...w,
            debug: debug(w),
        })),
        debug: debug(mockData),
    };
}
function debug(mockData) {
    return function () {
        console.log(`Debug ${mockData.type}`);
        console.log(JSON.stringify(mockData, null, 2));
    };
}
