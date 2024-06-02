import { Link } from "react-router-dom";

import dayjs from "dayjs";

import { Trash } from "iconoir-react";

import {
  getCoverPhotoKey,
  getCoverPhotoRoute,
  getGithubLink,
} from "../../lib/blob";

export default function CoverPhotoCard({
  id,
  createdAt,
}: {
  id: string;
  createdAt: Date;
}) {
  return (
    <div className="group relative max-w-xl">
      <div className="absolute left-0 top-0 h-full w-full bg-slate-700/50 p-5 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <p>
          id:{" "}
          <Link
            target="_blank"
            className="font-mono hover:underline"
            to={getGithubLink(getCoverPhotoKey(id))}
          >
            {id}
          </Link>
        </p>
        <p>
          Uploaded:{" "}
          <span className="font-mono">
            {dayjs(createdAt).format("ddd D MMM YYYY")}
          </span>
        </p>
        <button className="absolute bottom-4 right-4 flex flex-row gap-2 rounded-full bg-red-400 px-4 py-2 transition-colors hover:bg-red-700">
          <Trash />
          Delete
        </button>
      </div>
      <img src={getCoverPhotoRoute(id)} alt={id} className="w-full" />
    </div>
  );
}
