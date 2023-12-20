import Button from '@/src/components/ui/Button';
import classes from './results-title.module.scss';

export default function ResultsTitle({ date }: { date: Date }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}
