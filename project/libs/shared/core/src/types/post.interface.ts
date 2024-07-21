import { CommonModel } from "./common.interface";

export interface CommonPost extends CommonModel {
  id?: string;
  title: string;
  tags?: string[];
  ownerId: string;
}

export interface VideoPost extends CommonPost {
  linkToVideo: string;
}

export interface TextPost extends CommonPost {
  announce: string;
  text: string;
}

export interface QuotePost extends CommonPost {
  author: string;
  text: string;
}

export interface PhotoPost extends CommonPost {
  image: string;
}

export interface linkPost extends CommonPost {
  link: string;
  description?: string;
}
