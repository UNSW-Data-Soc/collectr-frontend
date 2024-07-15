import env from "../env";
import { Sponsorship } from "../types/sponsorshipsType";

export const getSponsorships: () => Promise<Sponsorship[]> = async () => {
  return fetch(`${env.BACKEND_URL}/sponsorships`, {
    method: "GET",
    credentials: "include",
  }).then((response) => {
    console.log(response);
    return response.json() as Promise<Sponsorship[]>;
  });
};
