import { BaseClassData, BaseClass } from "../base/BaseClass";
import { CardSection, Card } from "../mocks";

export function findByTextInCard(card: Card) {
  return function <T extends BaseClassData>(
    text: string,
    predicate: (value: string, text: string) => boolean = (v, t) => v === t
  ) {
    const foundInCard = [
      card.fixedFooter,
      ...(card.cardActions || []),
      card.header,
    ].filter(w => isTextInWidget(w)(text, predicate));

    const foundInSections = card.sections
      .map(s => findByTextInSection(s)(text, predicate))
      .flat();

    return [...foundInCard, ...foundInSections].filter(Boolean) as T[];
  };
}

export function findByTextInSection(section: CardSection) {
  return function <T extends BaseClassData>(
    text: string,
    predicate: (value: string, text: string) => boolean = (v, t) => v === t
  ): T[] {
    const inWidgets = section.widgets.reduce((prev, curr) => {
      const textFound = isTextInWidget(curr)(text, predicate);

      return textFound ? [...prev, curr] : prev;
    }, [] as BaseClassData[]) as T[];

    return inWidgets;
  };
}

export function isTextInWidget(widget: BaseClassData | undefined) {
  return function (
    text: string,
    predicate: (value: string, text: string) => boolean = (v, t) => v === t
  ) {
    if (!widget) {
      return false;
    }

    return deepExtractValues(widget).some(
      value => typeof value === "string" && predicate(value, text)
    );
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

function deepExtractValues(data: BaseClassData): any[] {
  const result = [];
  for (const prop in data) {
    const value = data[prop as keyof typeof data];
    if (typeof value === "object") {
      result.push(...deepExtractValues(value));
    } else {
      result.push(value);
    }
  }
  return result;
}
