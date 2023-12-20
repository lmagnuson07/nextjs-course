import AddressIcon from '@/src/components/icons/AddressIcon';
import CalendarIcon from '@/src/components/icons/CalendarIcon';
import LogisticsItem from './LogisticsItem';
import classes from './event-logistics.module.scss';
import Image from 'next/image';

export default function EventLogistics({
  date,
  address,
  image,
  imageAlt,
}: {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  let addressText = '';
  if (address) {
    addressText = address.replace(', ', '\n');
  }

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image
          src={image}
          alt={imageAlt}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={500}
          height={300}
        />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={CalendarIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}
