import Link from 'next/link';

import classes from './button.module.scss';

export default function Button(props: any) {
  return (
    <>
      {props.link ?
        <Link href={props.link} className={classes.btn}>
          {props.children}
        </Link>
      : <button onClick={props.onClick} className={classes.btn}>
          {props.children}
        </button>
      }
    </>
  );
}
