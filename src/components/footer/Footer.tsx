import styles from './footer.module.scss';
import facebook from '@src/img/ic-facebook.png';
import twitter from '@src/img/ic-twitter.png';
import youtube from '@src/img/ic-youtube.png';
import instagram from '@src/img/ic-instagram.png';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-links']}>
        <Link href="/privacy" className={styles['footer-privacy']}>
          Privacy Policy
        </Link>
        <Link href="/faq" className={styles['footer-faq']}>
          FAQ
        </Link>
      </div>
      <div className={styles['footer-copyright']}>©codeit - 2023</div>
      <div className={styles['footer-icons']}>
        <Link
          href="https://www.facebook.com/?locale=ko_KR"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={facebook}
            alt="Facebook"
            className={styles['footer-link-icons']}
          />
        </Link>
        <Link
          href="https://twitter.com/?lang=ko"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={twitter}
            alt="Twitter"
            className={styles['footer-link-icons']}
          />
        </Link>
        <Link href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <Image
            src={youtube}
            alt="YouTube"
            className={styles['footer-link-icons']}
          />
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={instagram}
            alt="Instagram"
            className={styles['footer-link-icons']}
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
