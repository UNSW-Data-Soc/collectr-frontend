import { useEffect, useState } from "react";

import { PlusCircle, Sort } from "iconoir-react";

import { getEvents } from "../../api/getEvents";
import type { Event } from "../../types/eventsType";

import ToolbarButton from "../../components/ToolbarButton";
import EventsCard from "../events/EventsCard";


export default function Events() {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      // TODO: remove this setTimeout -- just to simulate an artificial delay
      void getEvents().then((data) =>
        setEvents(
          data.sort((a, b) => (a.startTime > b.startTime ? -1 : 1))
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
          New Event
        </ToolbarButton>
        <ToolbarButton className="bg-orange-300">
          <Sort /> Sort by created time
        </ToolbarButton>
      </div>
      <div className="flex flex-row flex-wrap items-start justify-start gap-5">
        {events.map((event) => (
          <EventsCard key={event.id} id={event.id} title={event.title} slug={event.slug} startTime={event.startTime} endTime={event.endTime} location={event.location} photo={event.photo} />
        ))}
      </div>
    </>
  );
}
