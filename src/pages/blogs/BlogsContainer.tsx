import { PlusCircle, Sort } from "iconoir-react";
import ToolbarButton from "../../components/ToolbarButton";
import BlogsCard from "./BlogsCard";
import { useEffect, useState } from "react";
import { Blog } from "../../types/blogs";
import { getBlogs } from "../../api/blogs";

export default function BlogsContainer() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    setLoading(true);
    void getBlogs().then((data) => {
      setBlogs(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-row gap-3">
        <ToolbarButton className="bg-green-300">
          <PlusCircle className="h-6" />
          New Blog
        </ToolbarButton>
        <ToolbarButton className="bg-orange-300">
          <Sort /> Sort by created time
        </ToolbarButton>
        <ToolbarButton className="bg-blue-300">
          <Sort /> Sort by title
        </ToolbarButton>
      </div>
      <div className="flex flex-row flex-wrap items-start justify-start gap-5">
        {blogs.map((blog) => (
          <BlogsCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
}
