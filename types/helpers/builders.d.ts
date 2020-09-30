/// <reference types="google-apps-script" />
import { CardSection } from "../mocks/classes/CardSection";
import { Card } from "../mocks";
import { BaseClassData } from "../base/BaseClass";
export declare function buildSection(section: GoogleAppsScript.Card_Service.CardSection & {
    getData?: () => CardSection;
}): {
    findByText: <T extends BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
    findByType: <Target extends new () => import("../base/BaseClass").BaseClass<BaseClassData>>(ComponentClass: Target) => Target extends new () => import("../base/BaseClass").BaseClass<infer P> ? P[] : never[];
    widgets: {
        debug: () => void;
        _data: BaseClassData;
        type: string;
    }[];
    debug: () => void;
};
export declare function buildCard(card: GoogleAppsScript.Card_Service.Card & {
    getData?: () => Card;
}): {
    findByText: <T extends BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
    findByType: <Target extends new () => import("../base/BaseClass").BaseClass<BaseClassData>>(ComponentClass: Target) => Target extends new () => import("../base/BaseClass").BaseClass<infer P> ? P[] : never[];
    sections: {
        findByText: <T_1 extends BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T_1[];
        findByType: <Target extends new () => import("../base/BaseClass").BaseClass<BaseClassData>>(ComponentClass: Target) => Target extends new () => import("../base/BaseClass").BaseClass<infer P> ? P[] : never[];
        widgets: {
            debug: () => void;
            _data: BaseClassData;
            type: string;
        }[];
        debug: () => void;
    }[];
    fixedFooter: import("../mocks").FixedFooter | undefined;
    header: import("../mocks").CardHeader | undefined;
    name: string | undefined;
    cardActions: import("../mocks").CardAction[];
    debug: () => void;
};
