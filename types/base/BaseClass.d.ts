export interface BaseClassData {
    widgets?: any[];
    sections?: any[];
}
export declare class BaseClass<T extends BaseClassData = BaseClassData> {
    _data: T;
    type: string;
    constructor(data?: T);
    getData(): T & {
        type: string;
    };
}
