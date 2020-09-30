import * as Mocks from "./mocks";
import { BaseClass } from "./base/BaseClass";
import * as Spec from "./helpers";

// @ts-ignore
Object.assign(global, Mocks, Spec);

export { BaseClass, Mocks, Spec };
