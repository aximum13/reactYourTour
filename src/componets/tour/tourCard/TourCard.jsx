import classNames from "classnames";
import { SectionSubtitle } from "componets/section/sectionSubtitle/sectionSubtitle";

import tourImg1 from "img/tour/tour-img-1.jpg";
import tourImg2 from "img/tour/tour-img-2.jpg";
import tourImg3 from "img/tour/tour-img-3.jpg";
import tourImg4 from "img/tour/tour-img-4.jpg";
import tourImg5 from "img/tour/tour-img-5.jpg";
import tourImg6 from "img/tour/tour-img-6.jpg";

import stylesText from "styles/text.module.scss";
import styles from "./TourCard.module.scss";

const tours = [
  { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg1 },
  { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg2 },
  { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg3 },
  { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg4 },
  { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg5 },
  { title: "Путешествие в горы", price: "от 80 000 руб", img: tourImg6 },
];

const TourCard = () => {
  return (
    <div className={styles.content}>
      <div className={styles.block}>
        {tours.map((el, i) => (
          <a key={i} href="/#" className={styles.card}>
            <img className={styles.img} src={el.img} alt="" />
            <div className={styles.group}>
              <SectionSubtitle className={classNames(styles.title)}>
                {el.title}
              </SectionSubtitle>
              <p className={classNames(styles.text, stylesText.small)}>{el.price}</p>
            </div>
            <p className={classNames(styles.link, stylesText.big)}>Подробнее</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TourCard;
