import { BaseClass } from "../../base/BaseClass";
import { BaseClassData } from "../../base/BaseClass";
import { TextButtonComputedProps } from "./TextButton";
export interface FixedFooterComputedProps extends BaseClassData {
    primaryButton?: TextButtonComputedProps;
    secondaryButton?: TextButtonComputedProps;
}
export declare class FixedFooter extends BaseClass<FixedFooterComputedProps> {
}
