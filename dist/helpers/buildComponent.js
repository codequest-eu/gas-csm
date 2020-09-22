"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildComponent = void 0;
function buildComponent(component) {
    const specData = component.getData();
    const type = component.type;
    return {
        findByText: findByText(specData),
        findByType: findByType(specData),
        specData,
    };
}
exports.buildComponent = buildComponent;
function findByType(data, found = []) {
    return function (ComponentClass) {
        return [...(data.widgets || []), ...(data.sections || [])].reduce((prev, curr) => {
            const result = curr.type === new ComponentClass().type ? [...prev, curr] : prev;
            return curr.widgets
                ? findByType(curr, result)(ComponentClass)
                : result;
        }, found);
    };
}
function findByText(comp, found = []) {
    return function (text, predicate = (v, t) => v === t) {
        return [...(comp.widgets || []), ...(comp.sections || [])].reduce((prev, curr) => {
            const textsFound = Object.entries(curr).filter(([, value]) => typeof value === "string" && predicate(value, text));
            const result = textsFound.length
                ? [...prev, { ...curr, textsFound }]
                : prev;
            return curr.widgets
                ? findByText(curr, result)(text, predicate)
                : result;
        }, found);
    };
}
