import { BaseClass, BaseClassData } from "../base/BaseClass";
import { CardSectionComputedProps, WidgetComputedProps, CardSection } from "../card/classes/CardSection";
import { Card, CardComputedProps } from "../card/classes/Card";
declare type CardOrSectionComputedProps = {
    widgets?: WidgetComputedProps[];
    sections?: CardSectionComputedProps[];
};
export declare function buildComponent<C extends Card | CardSection>(component: C): {
    findByText: <T extends BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
    findByType: <Target extends new () => BaseClass<BaseClassData>>(ComponentClass: Target) => Target extends new () => BaseClass<infer P> ? P[] : never[];
    sections: {
        findByType: <Target extends new () => BaseClass<BaseClassData>>(ComponentClass: Target) => Target extends new () => BaseClass<infer P> ? P[] : never[];
        widgets: WidgetComputedProps[];
        collapsible?: boolean | undefined;
        header?: string | undefined;
        numUncollapsibleWidgets?: number | undefined;
        type: string;
    }[];
    widgets: WidgetComputedProps[];
    card: (CardSectionComputedProps & {
        type: string;
    }) | (CardComputedProps & {
        type: string;
    }) | undefined;
    mockData: (CardSectionComputedProps & {
        type: string;
    }) | (CardComputedProps & {
        type: string;
    });
};
export declare function findByType<C extends BaseClassData>(data: CardOrSectionComputedProps, found?: BaseClassData[]): <Target extends new () => BaseClass>(ComponentClass: Target) => Target extends new () => BaseClass<infer P> ? P[] : never[];
export declare function findByText(comp: CardOrSectionComputedProps, found?: BaseClassData[]): <T extends BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
export {};
