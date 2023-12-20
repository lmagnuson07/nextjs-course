import Image from 'next/image';

import colors from '@/src/assets/styles/globals/colors.module.scss';
import classes from './event-item.module.scss';

import Button from '@/src/components/ui/Button';
import CalendarIcon from '@/src/components/icons/CalendarIcon';
import AddressIcon from '@/src/components/icons/AddressIcon';
import ArrowIcon from '@/src/components/icons/ArrowIcon';

export default function EventItem({
  title,
  image,
  date,
  location,
  id,
  ...props
}: any) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      {/*<Image src={image} alt={title} width={250} height={160} quality={100} />*/}
      <Image
        src={image}
        alt={title}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={500}
        height={300}
      />
      <div className={classes.content}>
        <div className={classes.content}>
          <h2 style={{ color: colors.black }}>{title}</h2>
          <div className={classes.date}>
            <CalendarIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
