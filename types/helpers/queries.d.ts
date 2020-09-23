import { BaseClassData, BaseClass } from "../base/BaseClass";
import { CardSectionComputedProps, WidgetComputedProps } from "../card";
declare type CardOrSectionComputedProps = {
    widgets?: WidgetComputedProps[];
    sections?: CardSectionComputedProps[];
};
export declare function findByText(comp: CardOrSectionComputedProps, found?: BaseClassData[]): <T extends BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
export declare function findByType<C extends BaseClassData>(data: CardOrSectionComputedProps, found?: BaseClassData[]): <Target extends new () => BaseClass>(ComponentClass: Target) => Target extends new () => BaseClass<infer P> ? P[] : never[];
export {};
