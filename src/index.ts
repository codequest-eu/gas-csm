import * as Mocks from "./mocks";
import { BaseClass } from "./base/BaseClass";
import * as Spec from "./helpers";

// @ts-ignore
Object.assign(global, Card, Spec);

export { BaseClass, Mocks, Spec };
