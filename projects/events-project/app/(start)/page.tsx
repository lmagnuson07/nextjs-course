import { getFeaturedEvents } from '@/src/functions/fetch/fetch-data';
import { Event } from '@/src/types/types';
import EventList from '@/app/(start)/events/_components/EventList';

import { revalidatePath } from 'next/cache';
import NewsletterRegistration from '@/src/components/input/newsletter-registration';

export default async function HomePage() {
  const featuredEvents: Event[] = await getFeaturedEvents();
  revalidatePath('(start)/');
  return (
    <>
      <h1>Home page</h1>
      <NewsletterRegistration />
      <EventList events={featuredEvents} />
    </>
  );
}
