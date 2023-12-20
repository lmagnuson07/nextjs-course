import classes from './logistics-item.module.scss';

export default function LogisticsItem({
  children,
  icon: Icon,
  ...props
}: {
  children: React.ReactNode;
  icon: any;
}) {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}
