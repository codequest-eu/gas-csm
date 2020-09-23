"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByType = exports.findByText = void 0;
function findByText(comp, found = []) {
    return function (text, predicate = (v, t) => v === t) {
        return [...(comp.widgets || []), ...(comp.sections || [])].reduce((prev, curr) => {
            const textsFound = Object.entries(curr).filter(([, value]) => typeof value === "string" && predicate(value, text));
            const result = textsFound.length ? [...prev, curr] : prev;
            return curr.widgets
                ? findByText(curr, result)(text, predicate)
                : result;
        }, found);
    };
}
exports.findByText = findByText;
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
