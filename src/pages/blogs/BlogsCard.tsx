import { Blog } from "../../types/blogs";
import dayjs from "dayjs";
import { Trash, Upload } from "iconoir-react";
import { getFirstImageUrl } from "./utils";

export default function BlogsCard({ blog }: { blog: Blog }) {
  return (
    <div className="group relative max-w-xl overflow-y-auto">
      <div className="absolute left-0 top-0 h-full w-full bg-slate-700/50 p-5 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <p>id: {blog.id}</p>
        <p>slug: {blog.slug}</p>
        <p>title: {blog.title}</p>
        <p>author: {blog.author}</p>
        <p>user id of creator: {blog.creator}</p>
        <p>{blog.public ? "PUBLIC" : "HIDDEN"}</p>
        <p>
          Created:{" "}
          <span className="font-mono">
            {dayjs(blog.createdTime).format("ddd D MMM YYYY")}
          </span>
        </p>
        <p>
          Last Edited:{" "}
          <span className="font-mono">
            {dayjs(blog.lastEditTime).format("ddd D MMM YYYY")}
          </span>
        </p>
        {blog.tags.length > 0 && (
          <div className="flex flex-row gap-2">
            {blog.tags.map(({ tagId, tag: { name, colour } }) => (
              <p
                className="rounded-full px-3 py-1"
                style={{ backgroundColor: colour }}
                key={tagId}
              >
                {name}
              </p>
            ))}
          </div>
        )}
        <div className="absolute bottom-4 right-4 flex flex-row gap-4">
          <button className="flex flex-row gap-2 rounded-full bg-blue-400 px-4 py-2 transition-colors hover:bg-blue-700">
            <Upload />
            Publish
          </button>
          <button className="flex flex-row gap-2 rounded-full bg-red-400 px-4 py-2 transition-colors hover:bg-red-700">
            <Trash />
            Delete
          </button>
        </div>
      </div>
      <img
        src={getFirstImageUrl(blog.body).url}
        alt={"blog image"}
        className="w-full"
      />
    </div>
  );
}
