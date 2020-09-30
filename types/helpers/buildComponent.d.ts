import { BaseClass, BaseClassData } from "../base/BaseClass";
import { CardSection, Widget, CardSection } from "../card/classes/CardSection";
import { Card } from "../card/classes/Card";
declare type CardOrSection = {
  widgets?: Widget[];
  sections?: CardSection[];
};
export declare function buildComponent<C extends Card | CardSection>(
  component: C
): {
  findByText: <T extends BaseClassData>(
    text: string,
    predicate?: (value: string, text: string) => boolean
  ) => T[];
  findByType: <Target extends new () => BaseClass<BaseClassData>>(
    ComponentClass: Target
  ) => Target extends new () => BaseClass<infer P> ? P[] : never[];
  sections: {
    findByType: <Target extends new () => BaseClass<BaseClassData>>(
      ComponentClass: Target
    ) => Target extends new () => BaseClass<infer P> ? P[] : never[];
    widgets: Widget[];
    collapsible?: boolean | undefined;
    header?: string | undefined;
    numUncollapsibleWidgets?: number | undefined;
    type: string;
  }[];
  widgets: Widget[];
  card:
    | (CardSection & {
        type: string;
      })
    | (Card & {
        type: string;
      })
    | undefined;
  mockData:
    | (CardSection & {
        type: string;
      })
    | (Card & {
        type: string;
      });
};
export declare function findByType<C extends BaseClassData>(
  data: CardOrSection,
  found?: BaseClassData[]
): <Target extends new () => BaseClass>(
  ComponentClass: Target
) => Target extends new () => BaseClass<infer P> ? P[] : never[];
export declare function findByText(
  comp: CardOrSection,
  found?: BaseClassData[]
): <T extends BaseClassData>(
  text: string,
  predicate?: (value: string, text: string) => boolean
) => T[];
export {};
