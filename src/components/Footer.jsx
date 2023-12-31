import "./Footer.scss";
import facebook from "img/ic-facebook.png";
import twitter from "img/ic-twitter.png";
import youtube from "img/ic-youtube.png";
import instagram from "img/ic-instagram.png";

function Footer() {
  return (
    <footer>
      <div class="footer-copyright">©codeit - 2023</div>
      <div class="footer-links">
        <a href="/privacy" class="footer-privacy">
          Privacy Policy
        </a>
        <a href="/faq" class="footer-faq">
          FAQ
        </a>
      </div>
      <div class="footer-icons">
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
