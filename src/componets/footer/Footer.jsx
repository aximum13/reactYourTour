import instIcon from "img/svg/inst.svg";
import fbIcon from "img/svg/fb.svg";
import vkIcon from "img/svg/vk.svg";

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container + " container"}>
        <p className={styles.text + " p-normal"}>Наши социальные сети</p>
        <div className={styles.social}>
          <a href="" className={styles.link + " p-normal"}>
            <img src={instIcon} alt="" className={styles.icon} />
            instagram
          </a>
          <a href="" className={styles.link + " p-normal"}>
            <img src={fbIcon} alt="" className={styles.icon} />
            facebook
          </a>
          <a href="" className={styles.link + " p-normal"}>
            <img src={vkIcon} alt="" className={styles.icon} />
            vkontakte
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
