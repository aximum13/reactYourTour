import footerImg from "img/footer/footer-img.jpg";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className="section">
      <div className={styles.container + " container"}>
        <div className={styles.card}>
          <img src={footerImg} alt="" className={styles.img} />
          <div className={styles.block}>
            <h3 className="section-subtitle">
              Пора в путешествие вместе с нами!
            </h3>
            <p className={styles.text + " p-normal"}>
              Напиши на почту и узнай подробности на{" "}
              <a
                href="mailto:yourtour@gmail.com"
                className={styles.link + " p-normal"}
              >
                yourtour@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
