import classes from './event-content.module.scss';

export default function EventContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={classes.content}>{children}</section>;
}
