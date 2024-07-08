import { useEffect, useState } from "react";

import { getJobPostings } from "../../api/jobPostings";
import type { JobPost } from "../../types/jobpostings";

import ToolbarButton from "../../components/ToolbarButton";
import { Suitcase, Sort } from "iconoir-react";
import JobPostCard from "./JobPostCard";

export default function JobPostings() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const response = async () => {
      await getJobPostings().then((data) =>
        setJobPosts(
          data.sort((a, b) => (a.createdTime > b.createdTime ? -1 : 1))
        )
      );
      setIsLoading(false);
    };

    response();
  }, []);

  if (isLoading) return <p>is Loading...</p>;

  return (
    <div>
      <div className="flex w-[30%] flex-row gap-4 pb-8">
        <ToolbarButton className="bg-green-300">
          <Suitcase />
          Add New JobPost
        </ToolbarButton>
        <ToolbarButton className="bg-orange-300">
          <Sort />
          Sort by A-Z
        </ToolbarButton>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {jobPosts.map((jp) => (
          <JobPostCard key={jp.id} id={jp.id} createdTime={jp.createdTime} />
        ))}
      </div>
    </div>
  );
}
