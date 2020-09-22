import { BaseClass, BaseClassData } from "../base/BaseClass";
import * as Card from "../card";

export function buildComponent<C extends BaseClassData>(
  component: BaseClass<C>
) {
  const specData = component.getData();

  const type = component.type;

  return {
    findByText: findByText<C>(specData),
    findByType: findByType<C>(specData),
    specData,
  };
}

function findByType<C extends BaseClassData>(
  data: C,
  found: BaseClassData[] = []
) {
  return function <Target extends { new (): BaseClass }>(
    ComponentClass: Target
  ): Target extends { new (): BaseClass<infer P> } ? P[] : never[] {
    return [...(data.widgets || []), ...(data.sections || [])].reduce(
      (prev, curr) => {
        const result =
          curr.type === new ComponentClass().type ? [...prev, curr] : prev;

        return curr.widgets
          ? findByType<C>(curr, result)(ComponentClass)
          : result;
      },
      found
    );
  };
}

function findByText<C extends BaseClassData>(
  comp: C,
  found: BaseClassData[] = []
) {
  return function (
    text: string,
    predicate: (value: string, text: string) => boolean = (v, t) => v === t
  ): BaseClassData[] {
    return [...(comp.widgets || []), ...(comp.sections || [])].reduce(
      (prev, curr) => {
        const textsFound = Object.entries(curr).filter(
          ([, value]) => typeof value === "string" && predicate(value, text)
        );

        const result = textsFound.length
          ? [...prev, { ...curr, textsFound }]
          : prev;

        return curr.widgets
          ? findByText(curr, result)(text, predicate)
          : result;
      },
      found
    );
  };
}
