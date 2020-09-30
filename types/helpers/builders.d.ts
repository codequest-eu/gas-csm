/// <reference types="google-apps-script" />
import { CardSection } from "../mocks/classes/CardSection";
import { Card } from "../mocks";
export declare function buildSection(section: GoogleAppsScript.Card_Service.CardSection & {
    getData?: () => CardSection;
}): {
    findByText: <T extends import("../base/BaseClass").BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
    findByType: <Target extends new () => import("..").BaseClass<import("../base/BaseClass").BaseClassData>>(ComponentClass: Target) => Target extends new () => import("..").BaseClass<infer P> ? P[] : never[];
    widgets: import("../mocks").Widget<import("../base/BaseClass").BaseClassData>[];
    debug: () => void;
};
export declare function buildCard(card: GoogleAppsScript.Card_Service.Card & {
    getData?: () => Card;
}): {
    findByText: <T extends import("../base/BaseClass").BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
    findByType: <Target extends new () => import("..").BaseClass<import("../base/BaseClass").BaseClassData>>(ComponentClass: Target) => Target extends new () => import("..").BaseClass<infer P> ? P[] : never[];
    sections: {
        findByText: <T extends import("../base/BaseClass").BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
        findByType: <Target extends new () => import("..").BaseClass<import("../base/BaseClass").BaseClassData>>(ComponentClass: Target) => Target extends new () => import("..").BaseClass<infer P> ? P[] : never[];
        widgets: import("../mocks").Widget<import("../base/BaseClass").BaseClassData>[];
        debug: () => void;
    }[];
    fixedFooter: import("../mocks").FixedFooter | undefined;
    header: import("../mocks").CardHeader | undefined;
    name: string | undefined;
    cardActions: import("../mocks").CardAction[];
    debug: () => void;
};
