import { useEffect, useState } from "react";

import { PlusCircle, Sort } from "iconoir-react";

import { getCoverPhotos } from "../../api/coverPhotos";
import type { CoverPhoto } from "../../types/coverphoto";

import ToolbarButton from "../../components/ToolbarButton";
import CoverPhotoCard from "./CoverPhotoCard";

export default function CoverPhotos() {
  const [isLoading, setIsLoading] = useState(true);
  const [coverPhotos, setCoverPhotos] = useState<CoverPhoto[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      // TODO: remove this setTimeout -- just to simulate an artificial delay
      void getCoverPhotos().then((data) =>
        setCoverPhotos(
          data.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
        )
      );
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex flex-row gap-3">
        <ToolbarButton className="bg-green-300">
          <PlusCircle className="h-6" />
          New Cover Photo
        </ToolbarButton>
        <ToolbarButton className="bg-orange-300">
          <Sort /> Sort by created time
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
