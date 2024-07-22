import { useEffect, useState } from "react";
// import { PlusCircle, Sort } from "iconoir-react";
import { getResources } from "../../api/resources";
import type { Resource } from "../../types/resources";
// import ToolbarButton from "../../components/ToolbarButton";
import ResourceCard from "./ResourceCard";

export default function Resources() {
  const [isLoading, setIsLoading] = useState(true);
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      void getResources().then((data: Resource[]) =>
        setResources(
          data.sort((a, b) => (a.createdTime > b.createdTime ? -1 : 1))
        )
      );
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      {/* <div className="flex flex-row gap-3">
        <ToolbarButton className="bg-green-300">
          <PlusCircle className="h-6" />
          New Resource
        </ToolbarButton>
        <ToolbarButton className="bg-orange-300">
          <Sort /> Sort by created time
        </ToolbarButton>
      </div> */}
      <div className="flex flex-row flex-wrap items-start justify-start gap-5">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </>
  );
}
