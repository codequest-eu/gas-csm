/// <reference types="google-apps-script" />
import { CardSectionComputedProps } from "../card/classes/CardSection";
import { CardComputedProps } from "../card";
export declare function buildSection(section: GoogleAppsScript.Card_Service.CardSection & {
    getData?: () => CardSectionComputedProps;
}): {
    findByText: <T extends import("../base/BaseClass").BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
    findByType: <Target extends new () => import("..").BaseClass<import("../base/BaseClass").BaseClassData>>(ComponentClass: Target) => Target extends new () => import("..").BaseClass<infer P> ? P[] : never[];
    widgets: import("../card").WidgetComputedProps[];
    debug: () => void;
};
export declare function buildCard(card: GoogleAppsScript.Card_Service.Card & {
    getData?: () => CardComputedProps;
}): {
    findByText: <T extends import("../base/BaseClass").BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
    findByType: <Target extends new () => import("..").BaseClass<import("../base/BaseClass").BaseClassData>>(ComponentClass: Target) => Target extends new () => import("..").BaseClass<infer P> ? P[] : never[];
    sections: {
        findByText: <T extends import("../base/BaseClass").BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
        findByType: <Target extends new () => import("..").BaseClass<import("../base/BaseClass").BaseClassData>>(ComponentClass: Target) => Target extends new () => import("..").BaseClass<infer P> ? P[] : never[];
        widgets: import("../card").WidgetComputedProps[];
        debug: () => void;
    }[];
    fixedFooter: import("../card").FixedFooter | undefined;
    header: import("../card").CardHeaderComputedProps | undefined;
    name: string | undefined;
    cardActions: import("../card").CardActionComputedProps[];
    debug: () => void;
};
