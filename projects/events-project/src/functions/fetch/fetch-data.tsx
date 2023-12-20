import config from '@/config';
import { Event, EventDateFilter } from '@/src/types/types';

const eventsUrl = config.firebaseUrl + config.eventsEndpoint;

function parseEvents(events: Record<string, Event>) {
  return Object.keys(events).map((key) => ({
    id: key,
    title: events[key].title,
    description: events[key].description,
    date: new Date(events[key].date).toISOString(),
    isFeatured: events[key].isFeatured,
    image: events[key].image,
    location: events[key].location,
  }));
}

async function fetchAll(url: string, options?: Object | null): Promise<any> {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  return await response.json();
}

export async function getAllEvents() {
  const data = await fetchAll(eventsUrl, {
    next: { revalidate: config.revalidateDuration },
  });
  const events: Event[] = parseEvents(data);
  return events;
}

export async function getEventById(id: string) {
  const url = `${config.firebaseUrl}events/${id}.json`;
  return await fetchAll(url, {
    next: { revalidate: config.revalidateIdDuration },
  });
}

export async function getFeaturedEvents() {
  const events: Event[] = await getAllEvents();
  return events.filter((event: Event) => event.isFeatured);
}

export async function getFilteredEvents(dateFilter: EventDateFilter) {
  const { year, month } = dateFilter;
  const events = await getAllEvents();

  return events.filter((event: Event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}
