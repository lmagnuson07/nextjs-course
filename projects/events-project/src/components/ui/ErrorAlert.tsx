import classes from './error-alert.module.scss';

export default function ErrorAlert({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={classes.alert}>{children}</div>;
}
