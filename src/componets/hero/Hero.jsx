import classNames from "classnames";
import { Container } from "componets/container/Container";

import stylesText from "styles/text.module.scss";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <h1 className={styles.title}>Идеальные путешествия существуют</h1>
        <p className={classNames(styles.text, stylesText.normal)}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <a href="/#" className={classNames(styles.btn, stylesText.small)}>
          Найти тур
        </a>
      </Container>
    </section>
  );
};

export default Hero;
