import classNames from "classnames";
import { Container } from "componets/container/Container";
import { Section } from "componets/section/Section";
import { SectionTitle } from "componets/section/sectionTitle/sectionTitle";
import { SectionSubtitle } from "componets/section/sectionSubtitle/sectionSubtitle";

import reviewImg1 from "img/review/review-1.jpg";
import reviewImg2 from "img/review/review-2.jpg";

import stylesText from "styles/text.module.scss";
import styles from "./Review.module.scss";

const reviews = [
  {
    text: [
      "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.",
    ],
    name: "Мария",
    tour: "Тур: Вдали от дома",
    img: reviewImg1,
  },
  {
    text: [
      "Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.",
      "Значимость этих проблем настолько очевидна, что дальнейшее различных форм деятельности обеспечивает широкому кругу) участие в формировании новых предложений. Практика показывает, что реализация намеченных заданий в значительной степени обуславливает создание развития.",
    ],
    name: "Павел",
    tour: "Тур: Путешествие в горы",
    img: reviewImg2,
  },
];

const Review = () => {
  return (
    <Section id="reviews" className={styles.review}>
      <Container>
        <SectionTitle className={classNames(styles.title)}>
          Отзывы наших путешественников
        </SectionTitle>
        <p className={classNames(styles.subtitle, stylesText.normal)}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <div className={styles.block}>
          {reviews.map((el, i) => (
            <div key={i} className={styles.card}>
              <div>
                {el.text.map((text, i) => (
                  <p
                    key={i}
                    className={classNames(styles.text, stylesText.big)}
                  >
                    {text}
                  </p>
                ))}
              </div>
              <div className={styles.group}>
                <div className={styles.blockCard}>
                  <SectionSubtitle>{el.name}</SectionSubtitle>
                  <p className={classNames(styles.desc, stylesText.small)}>
                    {el.tour}
                  </p>
                </div>
                <img src={el.img} alt="" className={styles.img} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Review;
