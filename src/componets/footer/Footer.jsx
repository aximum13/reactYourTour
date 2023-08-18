import instIcon from "./../../img/svg/inst.svg";
import fbIcon from "./../../img/svg/fb.svg";
import vkIcon from "./../../img/svg/vk.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__text p-normal">Наши социальные сети</p>
        <div className="footer__social social">
          <a href="" className="social__link p-normal">
            <img src={instIcon} alt="" className="social__icon" />
            instagram
          </a>
          <a href="" className="social__link p-normal">
            <img src={fbIcon} alt="" className="social__icon" />
            facebook
          </a>
          <a href="" className="social__link p-normal">
            <img src={vkIcon} alt="" className="social__icon" />
            vkontakte
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
