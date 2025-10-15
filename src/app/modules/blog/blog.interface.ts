import { Types } from "mongoose";

export interface IBlog {
  title: string;
  slug?: string;
  description: string;
  tags: string[];
  viewCount: number;
  thumbnail?: string;
  author: Types.ObjectId;
}
