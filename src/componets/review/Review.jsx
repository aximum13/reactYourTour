import reviewImg1 from "./../../img/review/review-1.jpg";
import reviewImg2 from "./../../img/review/review-2.jpg";

function Review() {
  return (
    <section id="reviews" className="reviews section">
      <div className="container reviews__container">
        <h2 className="section-title reviews__title">
          Отзывы наших путешественников
        </h2>
        <p className="reviews__text p-normal">
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <div className="reviews__block">
          <div className="reviews__card card">
            <div className="card__group">
              <p className="card__text p-big">
                Идейные соображения высшего порядка, а также рамки и место
                обучения кадров обеспечивает широкому кругу (специалистов)
                участие в формировании новых предложений. Идейные соображения
                высшего порядка, а также начало повседневной работы по
                формированию позиции позволяет оценить значение модели развития.
              </p>
            </div>
            <div className="card__group card__group_bottom">
              <div className="card__block">
                <h3 className="card__name section-subtitle">Мария</h3>
                <p className="card__desc p-small">Тур: Вдали от дома</p>
              </div>
              <img
                src={reviewImg1}
                alt=""
                className="card__img"
              />
            </div>
          </div>
          <div className="reviews__card card">
            <div className="card__group">
              <p className="card__text p-big">
                Равным образом постоянный количественный рост и сфера нашей
                активности играет важную роль в формировании системы обучения
                кадров, соответствует насущным потребностям.
              </p>
              <p className="card__text p-big">
                {" "}
                Значимость этих проблем настолько очевидна, что дальнейшее
                развитие различных форм деятельности обеспечивает широкому кругу
                (специалистов) участие в формировании новых предложений.
                Повседневная практика показывает, что реализация намеченных
                плановых заданий в значительной степени обуславливает создание
                модели развития.
              </p>
            </div>
            <div className="card__group card__group_bottom">
              <div className="card__block">
                <h3 className="card__name section-subtitle">Павел</h3>
                <p className="card__desc p-small">Тур: Путешествие в горы</p>
              </div>
              <img
                src={reviewImg2}
                alt=""
                className="card__img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
