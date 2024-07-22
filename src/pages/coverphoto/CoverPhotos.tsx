import { useCallback, useEffect, useState } from "react";

import { PlusCircle, Sort, SortDown } from "iconoir-react";

import { getCoverPhotos } from "../../api/coverPhotos";
import type { CoverPhoto } from "../../types/coverphoto";

import ToolbarButton from "../../components/ToolbarButton";
import CoverPhotoCard from "./CoverPhotoCard";

type SortingStrategy = "asc" | "desc";

export default function CoverPhotos() {
  const [isLoading, setIsLoading] = useState(true);
  const [coverPhotos, setCoverPhotos] = useState<CoverPhoto[]>([]);
  const [sortingStrategy, setSortingStrategy] =
    useState<SortingStrategy>("desc");

  const toggleSortingStrategy = useCallback(() => {
    setSortingStrategy((prev) => (prev === "asc" ? "desc" : "asc"));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    void getCoverPhotos().then((data) =>
      setCoverPhotos(data.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)))
    );
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log(sortingStrategy);
    setCoverPhotos((prev) =>
      prev.sort((a, b) => {
        if (sortingStrategy === "asc") {
          return a.createdAt > b.createdAt ? -1 : 1;
        } else {
          return a.createdAt > b.createdAt ? 1 : -1;
        }
      })
    );
  }, [sortingStrategy]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-row gap-3">
        <ToolbarButton className="bg-green-300">
          <PlusCircle className="h-6" />
          New Cover Photo
        </ToolbarButton>
        <ToolbarButton
          className="bg-orange-300"
          onClick={toggleSortingStrategy}
          disabled={isLoading}
        >
          {sortingStrategy === "desc" ? <Sort /> : <SortDown />} Sort by created
          time
        </ToolbarButton>
      </div>
      <div className="flex flex-row flex-wrap items-start justify-start gap-5">
        {coverPhotos.map((cp) => (
          <CoverPhotoCard key={cp.id} id={cp.id} createdAt={cp.createdAt} />
        ))}
      </div>
    </>
  );
}
