import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], required: true },
    thumbnail: { type: String, required: true },
    viewCount: { type: Number, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Blog = model<IBlog>("Blog", blogSchema);
