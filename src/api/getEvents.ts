import env from "../env";
import { Event } from "../types/eventsType";

export const getEvents: () => Promise<Event[]> = async () => {
  return fetch(`${env.BACKEND_URL}/events`, {
    method: "GET",
    credentials: "include",
  }).then((response) => {
    console.log(response);
    return response.json() as Promise<Event[]>;
  });
};
