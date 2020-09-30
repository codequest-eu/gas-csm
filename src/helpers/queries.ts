import { BaseClassData, BaseClass } from "../base/BaseClass";
import { CardSection, Card } from "../mocks";

export function findByText(
  comp: Card | CardSection,
  found: BaseClassData[] = []
) {
  return function <T extends BaseClassData>(
    text: string,
    predicate: (value: string, text: string) => boolean = (v, t) => v === t
  ): T[] {
    // @ts-ignore
    return [...(comp.widgets || []), ...(comp.sections || [])].reduce(
      (prev, curr) => {
        const textFound = Object.entries(curr).some(
          ([, value]) => typeof value === "string" && predicate(value, text)
        );

        const result = textFound ? [...prev, curr] : prev;

        return (curr as CardSection).widgets
          ? findByText(curr as CardSection, result)(text, predicate)
          : result;
      },
      found
    ) as T[];
  };
}

export function findByType<C extends BaseClassData>(
  data: Card | CardSection,
  found: BaseClassData[] = []
) {
  return function <Target extends { new (): BaseClass }>(
    ComponentClass: Target
  ): Target extends { new (): BaseClass<infer P> } ? P[] : never[] {
    // @ts-ignore
    return [...(data.widgets || []), ...(data.sections || [])].reduce(
      (prev, curr) => {
        const result =
          curr.type === new ComponentClass().type ? [...prev, curr] : prev;

        return (curr as CardSection).widgets
          ? findByType<C>(curr as CardSection, result)(ComponentClass)
          : result;
      },
      found
    );
  };
}
