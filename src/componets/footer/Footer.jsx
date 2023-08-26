import classNames from "classnames";
import { Container } from "componets/container/Container";

import instIcon from "img/svg/inst.svg";
import fbIcon from "img/svg/fb.svg";
import vkIcon from "img/svg/vk.svg";

import stylesText from "styles/text.module.scss";
import styles from "./Footer.module.scss";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <p className={classNames(styles.text, stylesText.normal)}>
          Наши социальные сети
        </p>
        <div className={styles.social}>
          <a href="/#" className={classNames(styles.link, stylesText.normal)}>
            <img src={instIcon} alt="" className={styles.icon} />
            instagram
          </a>
          <a href="/#" className={classNames(styles.link, stylesText.normal)}>
            <img src={fbIcon} alt="" className={styles.icon} />
            facebook
          </a>
          <a href="/#" className={classNames(styles.link, stylesText.normal)}>
            <img src={vkIcon} alt="" className={styles.icon} />
            vkontakte
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
