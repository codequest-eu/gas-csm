"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByType = exports.isTextInWidget = exports.findByTextInSection = exports.findByTextInCard = void 0;
function findByTextInCard(card) {
    return function (text, predicate = (v, t) => v === t) {
        const foundInCard = [
            card.fixedFooter,
            ...(card.cardActions || []),
            card.header,
        ].filter(w => isTextInWidget(w)(text, predicate));
        const foundInSections = card.sections
            .map(s => findByTextInSection(s)(text, predicate))
            .flat();
        return [...foundInCard, ...foundInSections].filter(Boolean);
    };
}
exports.findByTextInCard = findByTextInCard;
function findByTextInSection(section) {
    return function (text, predicate = (v, t) => v === t) {
        const inWidgets = section.widgets.reduce((prev, curr) => {
            const textFound = isTextInWidget(curr)(text, predicate);
            return textFound ? [...prev, curr] : prev;
        }, []);
        return inWidgets;
    };
}
exports.findByTextInSection = findByTextInSection;
function isTextInWidget(widget) {
    return function (text, predicate = (v, t) => v === t) {
        if (!widget) {
            return false;
        }
        return deepExtractValues(widget).some(value => typeof value === "string" && predicate(value, text));
    };
}
exports.isTextInWidget = isTextInWidget;
function findByType(data, found = []) {
    return function (ComponentClass) {
        // @ts-ignore
        return [...(data.widgets || []), ...(data.sections || [])].reduce((prev, curr) => {
            const result = curr.type === new ComponentClass().type ? [...prev, curr] : prev;
            return curr.widgets
                ? findByType(curr, result)(ComponentClass)
                : result;
        }, found);
    };
}
exports.findByType = findByType;
function deepExtractValues(data) {
    const result = [];
    for (const prop in data) {
        const value = data[prop];
        if (typeof value === "object") {
            result.push(deepExtractValues(value));
        }
        else {
            result.push(value);
        }
    }
    return result;
}
