'use client';

import { useRouter } from 'next/navigation';

import EventList from '@/app/(start)/events/_components/EventList';
import EventSearch from '@/app/(start)/events/_components/EventSearch';
import { Event } from '@/src/types/types';

export default function Client({ events }: { events: Event[] | undefined }) {
  const router = useRouter();

  function findEventsHandler(year: string, month: string) {
    // Programmatically navigate
    router.push(`/events/${year}/${month}`, {
      shallow: true,
      locale: 'en-US',
      scroll: true,
      // scrollTo: 'number',
      scrollTo: 26,
    });
  }

  return (
    <>
      <h1>Events Page</h1>
      {/*Server method*/}
      {/*<EventSearch />*/}
      {/*Client method*/}
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}
