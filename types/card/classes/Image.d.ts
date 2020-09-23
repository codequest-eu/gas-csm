import { ActionComputedProps } from "./Action";
import { BaseClassData } from "../../base/BaseClass";
import { Widget } from "./Widget";
export interface ImageComputedProps extends BaseClassData {
    imageUrl: string;
    altText?: string;
    onClickAction?: ActionComputedProps;
}
export declare class Image extends Widget<ImageComputedProps> {
}
