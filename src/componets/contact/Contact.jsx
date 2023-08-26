import classNames from "classnames";
import { Container } from "componets/container/Container";
import { Section } from "componets/section/Section";
import { SectionSubtitle } from "componets/section/sectionSubtitle/sectionSubtitle";

import footerImg from "img/footer/footer-img.jpg";

import stylesText from "styles/text.module.scss";
import styles from "./Contact.module.scss";


const Contact = () => {
  return (
    <Section>
      <Container className={styles.container}>
        <div className={styles.card}>
          <img src={footerImg} alt="" className={styles.img} />
          <div className={styles.block}>
            <SectionSubtitle className="section-subtitle">
              Пора в путешествие вместе с нами!
            </SectionSubtitle>
            <p className={classNames(styles.text, stylesText.normal)}>
              Напиши на почту и узнай подробности на{" "}
              <a
                href="mailto:yourtour@gmail.com"
                className={classNames(styles.link, stylesText.normal)}
              >
                yourtour@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
