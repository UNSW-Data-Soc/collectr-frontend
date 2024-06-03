import env from "../env";
import { CoverPhoto } from "../types/coverphoto";

export const getCoverPhotos: () => Promise<CoverPhoto[]> = async () => {
  return fetch(`${env.BACKEND_URL}/coverphotos`, {
    method: "GET",
    credentials: "include",
  }).then((response) => {
    console.log(response);
    return response.json() as Promise<CoverPhoto[]>;
  });
};
