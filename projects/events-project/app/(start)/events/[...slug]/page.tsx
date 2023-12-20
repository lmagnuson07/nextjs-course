import EventList from '@/app/(start)/events/_components/EventList';
import ResultsTitle from '@/app/(start)/events/_components/ResultsTile';
import Button from '@/src/components/ui/Button';
import ErrorAlert from '@/src/components/ui/ErrorAlert';
import { getFilteredEvents } from '@/src/functions/fetch/fetch-data';
import { Event } from '@/src/types/types';
import { revalidatePath } from 'next/cache';
import { Metadata, ResolvingMetadata } from 'next';

// This page could implement client side data fetching
type Props = {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const filteredYear: string = params.slug[0];
  const filteredMonth: string = params.slug[1];

  const numYear: number = parseInt(filteredYear);
  const numMonth: number = parseInt(filteredMonth);

  return {
    title: 'Events from ' + numMonth + '/' + numYear,
    description: 'All events for ' + numMonth + '/' + numYear,
  };
}

export default async function FilteredEventsPage({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: any;
}) {
  const filteredYear: string = params.slug[0];
  const filteredMonth: string = params.slug[1];

  const numYear: number = parseInt(filteredYear);
  const numMonth: number = parseInt(filteredMonth);

  const filteredEvents: Event[] = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  revalidatePath('(start)/events/[...slug]', 'page');

  return (
    <section>
      {!params.slug ?
        <p>Loading...</p>
      : (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
      ) ?
        <>
          <ErrorAlert>
            <p>Invalid Filter. Please adjust your values</p>
          </ErrorAlert>
          <div className={'center'}>
            <Button link="/events">Show all events</Button>
          </div>
        </>
      : !filteredEvents || filteredEvents.length === 0 ?
        <>
          <ErrorAlert>
            <p>No events found</p>
          </ErrorAlert>
          <div className={'center'}>
            <Button link="/events">Show all events</Button>
          </div>
        </>
      : <div>
          <ResultsTitle date={new Date(numYear, numMonth - 1)} />
          <EventList events={filteredEvents} />
        </div>
      }
    </section>
  );
}
