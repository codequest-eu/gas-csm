import * as Card from "./card";
import { BaseClass } from "./base/BaseClass";
import * as Spec from "./helpers";

// @ts-ignore
Object.assign(global, Card, Spec);

export { BaseClass, Card, Spec };
