import { BaseClassData, BaseClass } from "../base/BaseClass";
import { CardSectionComputedProps, WidgetComputedProps } from "../card";

type CardOrSectionComputedProps = {
  widgets?: WidgetComputedProps[];
  sections?: CardSectionComputedProps[];
};

export function findByText(
  comp: CardOrSectionComputedProps,
  found: BaseClassData[] = []
) {
  return function <T extends BaseClassData>(
    text: string,
    predicate: (value: string, text: string) => boolean = (v, t) => v === t
  ): T[] {
    return [...(comp.widgets || []), ...(comp.sections || [])].reduce(
      (prev, curr) => {
        const textsFound = Object.entries(curr).filter(
          ([, value]) => typeof value === "string" && predicate(value, text)
        );

        const result = textsFound.length ? [...prev, curr] : prev;

        return (curr as CardSectionComputedProps).widgets
          ? findByText(curr as CardSectionComputedProps, result)(
              text,
              predicate
            )
          : result;
      },
      found
    ) as T[];
  };
}

export function findByType<C extends BaseClassData>(
  data: CardOrSectionComputedProps,
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

        return (curr as CardSectionComputedProps).widgets
          ? findByType<C>(
              curr as CardSectionComputedProps,
              result
            )(ComponentClass)
          : result;
      },
      found
    );
  };
}
