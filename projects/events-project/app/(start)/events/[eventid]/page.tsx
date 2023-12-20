import {
  getEventById,
  getFeaturedEvents,
} from '@/src/functions/fetch/fetch-data';
import EventSummary from './_components/EventSummary';
import EventLogistics from './_components/EventLogistics';
import EventContent from './_components/EventContent';
import { Event } from '@/src/types/types';
import { revalidatePath } from 'next/cache';
import type { Metadata, ResolvingMetadata } from 'next';
import Comments from '@/src/components/input/comments';

export const dynamic = 'force-dynamic';

type Props = {
  params: { eventid: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.eventid;
  const event: Event = await getEventById(id);

  return {
    title: event.title,
    description: event.description,
  };
}

export async function generateStaticParams() {
  const data = await getFeaturedEvents();

  const ids = data.map((event) => event.id);
  const pathsWithParams = ids.map((id) => ({ eventid: id }));
  // console.log(pathsWithParams);
  return pathsWithParams;
}

export default async function EventDetailPage({
  params,
}: {
  params: { eventid: string };
}) {
  const eventId: string = params.eventid;
  const event: Event = await getEventById(eventId);
  revalidatePath('(start)/events/[eventid]', 'page');

  return (
    <>
      {event ?
        <>
          <EventSummary title={event.title} />
          <EventLogistics
            address={event.location}
            date={event.date}
            image={event.image}
            imageAlt={event.title}
          />
          <EventContent>
            <p>{event.description}</p>
          </EventContent>
          <Comments eventId={eventId} />
        </>
      : <div>
          <EventSummary title={'Event not found'} />
        </div>
      }
    </>
  );
}
