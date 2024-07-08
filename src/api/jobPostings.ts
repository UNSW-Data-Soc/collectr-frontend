import env from "../env";
import { JobPost } from "../types/jobpostings";

export const getJobPostings: () => Promise<JobPost[]> = async () => {
  return fetch(`${env.BACKEND_URL}/jobs`, {
    method: "GET",
    credentials: "include",
  }).then((response) => {
    console.log(response);
    return response.json() as Promise<JobPost[]>;
  });
};