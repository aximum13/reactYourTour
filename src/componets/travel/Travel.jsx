import classNames from "classnames";
import { Container } from "componets/container/Container";
import { Section } from "componets/section/Section";
import { SectionTitle } from "componets/section/sectionTitle/sectionTitle";

import travelImg1 from "img/travel/travel-img-1.jpg";
import travelImg2 from "img/travel/travel-img-2.jpg";
import travelImg3 from "img/travel/travel-img-3.jpg";
import travelImg4 from "img/travel/travel-img-4.jpg";
import travelImg5 from "img/travel/travel-img-5.jpg";
import travelImg6 from "img/travel/travel-img-6.jpg";
import travelImg7 from "img/travel/travel-img-7.jpg";
import travelImg8 from "img/travel/travel-img-8.jpg";
import travelImg9 from "img/travel/travel-img-9.jpg";
import travelImg10 from "img/travel/travel-img-10.jpg";
import travelImg11 from "img/travel/travel-img-11.jpg";
import travelImg12 from "img/travel/travel-img-12.jpg";
import travelImg13 from "img/travel/travel-img-13.jpg";

import stylesText from "styles/text.module.scss";
import styles from "./Travel.module.scss";

const topPhotos = [
  { type: "mobile", img: travelImg1 },
  { type: "desktop", img: travelImg2 },
  { type: "tablet", img: travelImg3 },
  { type: "mobile", img: travelImg4 },
];
const middlePhotos = [
  { type: "mobile", img: travelImg5 },
  { type: "tablet", img: travelImg6 },
  { type: "desktop", img: travelImg7 },
  { type: "mobile", img: travelImg8 },
  { type: "mobile", img: travelImg9 },
];
const bottomPhotos = [
  { type: "mobile", img: travelImg10 },
  { type: "mobile", img: travelImg11 },
  { type: "tablet", img: travelImg12 },
  { type: "desktop", img: travelImg13 },
];

const Travel = () => {
  const photoAdaptive = (type) => {
    return classNames(
      styles.img,
      { [styles.imgDesktop]: type === "desktop" },
      { [styles.imgTablet]: type === "tablet" }
    );
  };

  return (
    <Section className={styles.travel}>
      <Container className={styles.container}>
        <SectionTitle className={classNames(styles.title, "section-title")}>
          Фотографии путешествий
        </SectionTitle>
        <p className={classNames(styles.text, stylesText.normal)}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <div className={styles.content}>
          <div className={styles.block}>
            {topPhotos.map((el, i) => (
              <img
                key={i}
                className={photoAdaptive(el.type)}
                src={el.img}
                alt=""
              />
            ))}
          </div>
          <div className={classNames(styles.block, styles.blockBig)}>
            {middlePhotos.map((el, i) => (
              <img
                key={i}
                className={photoAdaptive(el.type)}
                src={el.img}
                alt=""
              />
            ))}
          </div>
          <div className={classNames(styles.block, styles.blockBottom)}>
            {bottomPhotos.map((el, i) => (
              <img
                key={i}
                className={photoAdaptive(el.type)}
                src={el.img}
                alt=""
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Travel;
