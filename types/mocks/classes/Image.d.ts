import { Action } from "./Action";
import { BaseClassData } from "../../base/BaseClass";
import { Widget } from "./Widget";
export interface Image extends BaseClassData {
    imageUrl: string;
    altText?: string;
    onClickAction?: Action;
}
export declare class Image extends Widget<Image> {
}
