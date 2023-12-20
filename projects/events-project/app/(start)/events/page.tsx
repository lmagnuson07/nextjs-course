import Client from './_components/Client';
import { getAllEvents } from '@/src/functions/fetch/fetch-data';
import { Event } from '@/src/types/types';

import { revalidatePath } from 'next/cache';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Events',
  description: 'Find a lot of great events that allow you to evolve!',
};

export default async function EventsPage() {
  const events: Event[] = await getAllEvents();
  revalidatePath('(start)/events');
  return (
    <>
      <Client events={events} />
    </>
  );
}
