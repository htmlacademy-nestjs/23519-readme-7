import { CommonModel } from "./common.interface";

export interface Comment extends CommonModel {
  id: string;
  text: string;
  ownerId: string;
}