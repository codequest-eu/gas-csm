import { BaseClassData, BaseClass } from "../base/BaseClass";
import { CardSection, Card } from "../mocks";
export declare function findByTextInCard(card: Card): <T extends BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
export declare function findByTextInSection(section: CardSection): <T extends BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
export declare function isTextInWidget(widget: BaseClassData | undefined): (text: string, predicate?: (value: string, text: string) => boolean) => boolean;
export declare function findByType<C extends BaseClassData>(data: Card | CardSection, found?: BaseClassData[]): <Target extends new () => BaseClass>(ComponentClass: Target) => Target extends new () => BaseClass<infer P> ? P[] : never[];
