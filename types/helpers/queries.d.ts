import { BaseClassData, BaseClass } from "../base/BaseClass";
import { CardSection, Card } from "../mocks";
export declare function findByText(comp: Card | CardSection, found?: BaseClassData[]): <T extends BaseClassData>(text: string, predicate?: (value: string, text: string) => boolean) => T[];
export declare function findByType<C extends BaseClassData>(data: Card | CardSection, found?: BaseClassData[]): <Target extends new () => BaseClass>(ComponentClass: Target) => Target extends new () => BaseClass<infer P> ? P[] : never[];
