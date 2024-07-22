import env from "../env";
import { Resource } from "../types/resources";

export const getResources: () => Promise<Resource[]> = async () => {
  return fetch(`${env.BACKEND_URL}/resources`, {
    method: "GET",
    credentials: "include",
  }).then((response) => {
    console.log(response);
    return response.json() as Promise<Resource[]>;
  });
};
