import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const addBlog = async (payload: IBlog) => {
  const blog = await Blog.create(payload);
  return blog;
};

export const blogServices = { addBlog };
