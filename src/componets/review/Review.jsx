import reviewImg1 from "img/review/review-1.jpg";
import reviewImg2 from "img/review/review-2.jpg";
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
    <section id="reviews" className={styles.review + " section"}>
      <div className="container">
        <h2 className={styles.title + " section-title"}>
          Отзывы наших путешественников
        </h2>
        <p className={styles.subtitle + " p-normal"}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <div className={styles.block}>
          {reviews.map((el, i) => (
            <div key={i} className={styles.card}>
              <div>
                {el.text.map((text, i) => (
                  <p key={i} className={styles.text + " p-big"}>
                    {text}
                  </p>
                ))}
              </div>
              <div className={styles.group}>
                <div className={styles.blockCard}>
                  <h3 className="card__name section-subtitle">{el.name}</h3>
                  <p className={styles.desc + " p-small"}>{el.tour}</p>
                </div>
                <img src={el.img} alt="" className={styles.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
