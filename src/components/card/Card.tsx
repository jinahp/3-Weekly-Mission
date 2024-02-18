import Popper from '@src/components/popper/Popper';
import icStar from '@src/img/ic-star.svg';
import defaultImg from '@src/img/img-default.svg';
import moment from 'moment';
import styles from './card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function Card({ link }: { link: Link }) {
  const createdAt = link.createdAt ?? link.created_at ?? 0;
  const date = new Date(createdAt);
  const dateString = date.toLocaleDateString();
  const timeString = moment(createdAt).fromNow();

  return (
    <article className={styles.card}>
      <Link href={link.url} rel="noreferrer" target="_blank">
        <Image src={icStar} alt="star" className={styles['card-star']} />
        <Image
          className={styles['card-image']}
          alt="thumbnail"
          src={link.imageSource ?? link.image_source ?? defaultImg}
          width={100}
          height={100}
        />
        <div className={styles['card-container']}>
          <div className={styles['card-wrapper']}>
            <div className={styles['card-time']}>{timeString}</div>
            <Popper linkTitle={link.title} />
          </div>
          <p className={styles['card-description']}>{link.description}</p>
          <div className={styles['card-date']}>{dateString}</div>
        </div>
      </Link>
    </article>
  );
}

export default Card;
