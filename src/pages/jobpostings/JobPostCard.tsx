import React from "react";

export default function JobPostCard({
  id,
  createdTime,
}: {
  id: string;
  createdTime: Date;
}) {
  return <div className="flex h-[300px] flex-row gap-3">{id}</div>;
}
