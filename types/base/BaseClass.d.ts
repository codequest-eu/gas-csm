export interface BaseClassData {
    type: string;
}
export declare class BaseClass<T extends BaseClassData = BaseClassData> {
    _data: T;
    type: string;
    constructor(data?: T);
    getData(): T & {
        type: string;
    };
}
