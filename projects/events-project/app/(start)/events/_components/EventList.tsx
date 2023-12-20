import EventItem from './EventItem';
import classes from './event-list.module.scss';

export default function EventList({ events }: any) {
  return (
    <ul className={classes.list}>
      {events.map((event: any) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
