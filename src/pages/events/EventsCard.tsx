import { Link } from "react-router-dom";

import dayjs from "dayjs";

import { Trash } from "iconoir-react";

import {
  getEventImageKey,
  getEventImageRoute,
  getGithubLink,
} from "../../lib/blob";

export default function EventsCard({
  id,
  title,
  slug,
  startTime,
  endTime,
  location,
  photo,
}: {
  id: string;
  title: string;
  slug: string;
  startTime: Date;
  endTime: Date;
  location: string;
  photo: string;
}) {
  return (
    <div className="group relative max-w-xl">
      <div className="absolute left-0 top-0 h-full w-full bg-slate-700/50 p-5 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <p>
          Event: <span className="font-mono">{title}</span>
        </p>
        <p>
          Slug: <span className="font-mono">{slug}</span>
        </p>
        <p>
          photoId:{" "}
          <Link
            target="_blank"
            className="font-mono hover:underline"
            to={getGithubLink(getEventImageKey(id, photo))}
          >
            {id}
          </Link>
        </p>
        <p>
          StartTime:{" "}
          <span className="font-mono">
            {dayjs(startTime).format("ddd D MMM YYYY")}
          </span>
        </p>
        <p>
          EndTime:{" "}
          <span className="font-mono">
            {dayjs(endTime).format("ddd D MMM YYYY")}
          </span>
        </p>
        <p>
          Location: <span className="font-mono">{location}</span>
        </p>
        <button className="absolute bottom-4 right-4 flex flex-row gap-2 rounded-full bg-red-400 px-4 py-2 transition-colors hover:bg-red-700">
          <Trash />
          Delete
        </button>
      </div>
      <img src={getEventImageRoute(id, photo)} alt={id} className="w-full" />
    </div>
  );
}
