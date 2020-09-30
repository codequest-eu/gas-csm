# `GAS-CSM`: Google Apps Script Card Service Mocks
This library provides mocks for components created for the G Suite Addon platform, via [CardService](https://developers.google.com/apps-script/reference/card-service). 

The entire lib is written in TypeScript.

## Installation
Add the following line to your `package.json` file:
```json
{
    ...,
    "devDependencies": {
        ...,
        "gas-csm": "github:codequest-eu/gas-csm#master",
        ...
    }
}
```

And run `npm i` or `yarn`. You have to have access to this repository and may be prompted for your passphrase during installation.

## Usage
You should import the library in your tests setup, so that it can inject `CardService` mock and [helpers](#helpers) into the global namespace. 

G Suite addons consist of cards, which contain sections, which contain widgets. Splitting your code into functions generating components accordingly is highly recommended. You can also check out our [boilerplate](), which enables you to write addons in a similar fashion you would write a web app in React with JSX.

### `CardService` mock

The library contains mocks for all classes returned by GAS CardService. Each of them extends the `BaseClass` mock, which uses a JS Proxy to construct class methods and gather data from CardService builders.


## Builders
### `buildCard(card: GoogleAppsScript.Card_Service.CardSection)`
You should use `buildCard` to get mock data from a `GoogleAppsScript.Card_Service.Card`.
```ts
// createHomepageCard.ts
function createHomepageCard() {
    const cardBuilder = GoogleAppsScript.Card_Service.newCardBuilder();

    // construct your card and build it
    // ...
    return cardBuilder.build(); 
}

// createHomepageCard.spec.ts

import { Spec } from 'gas-csm';

describe("createHomepageCard", () => {
    it("displays certain data", () => {
        const card = createHomepageCard();
        const result = Spec.buildCard(card);

        // use utils found in result
        const {
            // queries
            findByText,
            findByType,
            // card properties
            sections,
            fixedFooter,
            header,
            name,
            cardActions,
            // misc
            debug
        } = result;
    })
})
```


### `buildSection(section: GoogleAppsScript.Card_Service.CardSection)`
You should use `buildSection` to get mock data from a `GoogleAppsScript.Card_Service.CardSection`.
```ts
// createHomepageWelcomeSection.ts
function createHomepageWelcomeSection() {
    const section = GoogleAppsScript.Card_Service.newCardSection();

    // construct your section
    // ...
    // ...

    return section; 
}

// createHomepageWelcomeSection.spec.ts

import { Spec } from 'gas-csm';

describe("createHomepageWelcomeSection", () => {
    it("displays certain data", () => {
        const section = createHomepageWelcomeSection();
        const result = Spec.buildSection(section);

        // use utils found in result
        const {
            // queries
            findByText,
            findByType,
            // section properties
            widgets,
            // misc
            debug
        } = result;
    })
})
```

### `buildActionResponse(actionResponse: GoogleAppsScript.Card_Service.ActionResponse)`
Returns mocked ActionResponse. Contains navigation with cards built using `buildCard` and last built card hoisted and built the same way.

## Queries
Once you've built a card or section mock, the returned object provices helpers for finding elements within the mocked object. You can find these in results of `buildCard` and `buildSection` or import them manually from the `Spec` object. You will find them under `findByTextInCard`, `findByTextInSection`, `findByType` and `isTextInWidget`.

### `findByText(comp: Card | CardSection)(text: string, predicate?: (value: string, text: string) => boolean)`
Returns array of mocks in which at least one property's value was of type `string` and matched the passed `predicate`. Default `predicate` looks for exact matches. Customise this to your needs, if for example you are looking for props that include the text or were transformed in some way.

Cast the objects found in the returned array to their respective mocked props types to be able to check their properties:
```ts
const [submitButton] = result.findByText("Submit", (v, t) => v.includes(t));

(submitButton as Mocks.TextButton).onClickAction!.functionName.should.equal("someFn");
```

This way you start asserting on TS level in your tests.

### `findByType(comp: Card | CardSection)(ComponentClass: { new (): BaseClass })`
Returns array of mocks of certain type found within the passed mocked `Card` or `CardSection`. The `ComponentClass` should be one of the mock classes exported by this library, for example `DecoratedText`. Resulting array is strongly typed:

```ts
const [submitButton] = formSection.findByType(Mocks.TextButton);


// submitButton inferred type TextButton
submitButton.text.should.equal("Create");
submitButton.onClickAction!.functionName.should.equal(
    "someFn"
);
```

## Deploying

1. `npm run tsc` - compile TS -> JS
2. Commit changes and push a new branch.
3. Code review -> merge to `master` branch.