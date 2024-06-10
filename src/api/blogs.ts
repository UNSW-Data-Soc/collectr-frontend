import env from "../env";
import { Blog, BlogBody } from "../types/blogs";

type BlogUnprocessedBody = Omit<Blog, "body"> & { body: string };

export const getBlogs: () => Promise<Blog[]> = async () => {
  return fetch(`${env.BACKEND_URL}/blogs`, {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((blogs) => {
      console.log(blogs);
      return (blogs as BlogUnprocessedBody[]).map((blog) => ({
        ...blog,
        body: JSON.parse(blog.body) as BlogBody,
      })) as Blog[];
    });
};
