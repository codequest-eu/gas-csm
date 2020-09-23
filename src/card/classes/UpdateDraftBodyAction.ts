import { BaseClass, BaseClassData } from "../../base/BaseClass";
import { ContentType } from "../enums/ContentType";
import { UpdateDraftBodyType } from "../enums/UpdateDraftBodyType";

export interface UpdateDraftBodyActionComputedProps extends BaseClassData {
  updateContents: {
    content: string;
    contentType: ContentType;
  }[];
  updateType?: UpdateDraftBodyType;
}

export class UpdateDraftBodyAction extends BaseClass {}
