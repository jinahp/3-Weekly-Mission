import './footer.scss';
import facebook from 'img/ic-facebook.png';
import twitter from 'img/ic-twitter.png';
import youtube from 'img/ic-youtube.png';
import instagram from 'img/ic-instagram.png';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="/privacy" className="footer-privacy">
          Privacy Policy
        </a>
        <a href="/faq" className="footer-faq">
          FAQ
        </a>
      </div>
      <div className="footer-copyright">©codeit - 2023</div>
      <div className="footer-icons">
        <a href="https://www.facebook.com/?locale=ko_KR" target="_blank">
          <img src={facebook} />
        </a>
        <a href="https://twitter.com/?lang=ko" target="_blank">
          <img src={twitter} />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={youtube} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
