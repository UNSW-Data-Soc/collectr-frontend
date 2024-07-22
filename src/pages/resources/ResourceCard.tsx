// import { Link } from "react-router-dom";
// import dayjs from "dayjs";
// import { Trash } from "iconoir-react";
import type { ResourceTag } from "../../types/resources";


export default function ResourceCard({
  resource,
}: {
  resource: {
    id: string;
    title: string;
    description: string;
    link: string;
    createdTime: Date;
    tags: ResourceTag[];
  };
}) {
  return (
    <div className="group relative max-w-xl p-4 border rounded-md shadow-md">
      {/* <div className="absolute left-0 top-0 h-full w-full bg-slate-700/50 p-5 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <p>
          ID:{" "}
          <Link
            target="_blank"
            className="font-mono hover:underline"
            to={resource.link}
          >
            {resource.id}
          </Link>
        </p>
        <p>
          Uploaded:{" "}
          <span className="font-mono">
            {dayjs(resource.createdTime).format("ddd D MMM YYYY")}
          </span>
        </p>
        <button className="absolute bottom-4 right-4 flex flex-row gap-2 rounded-full bg-red-400 px-4 py-2 transition-colors hover:bg-red-700">
          <Trash />
          Delete
        </button>
      </div> */}
      <h2 className="font-bold text-lg">{resource.title}</h2>
      <p>{resource.description}</p>
      <a href={resource.link} rel="noreferrer" target="_blank" className="text-blue-500 hover:underline">
        Open Resource
      </a>
      <div className="mt-2">
        {resource.tags.map(({ tag }) => (
          <span key={tag.id} className="inline-block px-2 py-1 mr-2 text-xs rounded" style={{ backgroundColor: tag.colour, color: "#FFFFFF" }}>
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}