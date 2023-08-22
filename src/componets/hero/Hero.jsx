import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container + " container"}>
        <h1 className={styles.title}>Идеальные путешествия существуют</h1>
        <p className={styles.text + " p-normal"}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <a href="#" className={styles.btn + " p-small"}>
          Найти тур
        </a>
      </div>
    </section>
  );
};

export default Hero;
