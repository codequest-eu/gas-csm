import { BaseClass, BaseClassData } from "../base/BaseClass";
export declare function buildComponent<C extends BaseClassData>(component: BaseClass<C>): {
    findByText: (text: string, predicate?: (value: string, text: string) => boolean) => BaseClassData[];
    findByType: <Target extends new () => BaseClass<BaseClassData>>(ComponentClass: Target) => Target extends new () => BaseClass<infer P> ? P[] : never[];
    specData: C & {
        type: string;
    };
};
